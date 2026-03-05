#Requires -Version 5.1
<#
.SYNOPSIS
  managerkim-setup PowerShell client
.DESCRIPTION
  .NET ClientWebSocket으로 VPS 릴레이 서버(1664)에 연결하여
  강사의 원격 명령을 받아 실행하고 결과를 스트리밍합니다.
  Windows 10/11에서 추가 설치 없이 바로 실행 가능.
.EXAMPLE
  .\setup-client.ps1
  .\setup-client.ps1 -Name "학생-1"
#>

param(
    [string]$Name,
    [string]$RelayUrl = "ws://38.45.67.130:1664/ws"
)

$ErrorActionPreference = "Stop"
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# ── Console UI ──────────────────────────────────────────────────
$SEP = "---------------------------------------------"

function Show-Status {
    param([string]$SessionName, [string]$Status)
    Clear-Host
    Write-Host $SEP
    Write-Host "  managerkim-setup v1.0 (PowerShell)"
    Write-Host "  server: $($RelayUrl -replace 'ws://','')"
    Write-Host "  session: $SessionName"
    Write-Host "  status: $Status"
    Write-Host $SEP
    foreach ($entry in $script:LogBuffer) {
        Write-Host "  $($entry.Icon) $($entry.Text)"
    }
    Write-Host $SEP
    Write-Host "  Ctrl+C to quit"
}

function Get-Timestamp {
    return (Get-Date).ToString("HH:mm:ss")
}

# ── Prompt for name ─────────────────────────────────────────────
if (-not $Name) {
    $Name = Read-Host "Enter your name (e.g. student-1)"
    if ([string]::IsNullOrWhiteSpace($Name)) {
        $Name = "student-$(Get-Date -Format 'fff')"
    }
}

$script:LogBuffer = New-Object System.Collections.ArrayList

# ── Admin check ─────────────────────────────────────────────────
try {
    $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($identity)
    if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
        Write-Host "Warning: not running as admin. Some installs may fail." -ForegroundColor Yellow
        Start-Sleep -Seconds 1
    }
}
catch {
    # ignore
}

# ── WebSocket helpers (defined before Invoke-RelayCommand) ──────
function Send-WsMessage {
    param(
        [System.Net.WebSockets.ClientWebSocket]$Ws,
        [hashtable]$Message
    )

    if ($Ws.State -ne [System.Net.WebSockets.WebSocketState]::Open) { return }

    $jsonStr = $Message | ConvertTo-Json -Compress -Depth 5
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($jsonStr)
    $segment = New-Object System.ArraySegment[byte] -ArgumentList (,$bytes)
    $token = [System.Threading.CancellationToken]::None

    try {
        $task = $Ws.SendAsync($segment, [System.Net.WebSockets.WebSocketMessageType]::Text, $true, $token)
        $task.GetAwaiter().GetResult() | Out-Null
    }
    catch {
        # ignore send errors
    }
}

# ── Execute command ─────────────────────────────────────────────
function Invoke-RelayCommand {
    param(
        [string]$Id,
        [string]$Command,
        [System.Net.WebSockets.ClientWebSocket]$Ws
    )

    $outputAll = ""
    $exitCode = 1

    try {
        $psi = New-Object System.Diagnostics.ProcessStartInfo
        $psi.FileName = "powershell.exe"
        # Encode command as Base64 to avoid quoting issues
        $cmdBytes = [System.Text.Encoding]::Unicode.GetBytes($Command)
        $cmdB64 = [Convert]::ToBase64String($cmdBytes)
        $psi.Arguments = "-NoProfile -ExecutionPolicy Bypass -EncodedCommand $cmdB64"
        $psi.UseShellExecute = $false
        $psi.RedirectStandardOutput = $true
        $psi.RedirectStandardError = $true
        $psi.CreateNoWindow = $true
        $psi.StandardOutputEncoding = [System.Text.Encoding]::UTF8
        $psi.StandardErrorEncoding = [System.Text.Encoding]::UTF8

        $proc = [System.Diagnostics.Process]::Start($psi)

        while (-not $proc.StandardOutput.EndOfStream) {
            $line = $proc.StandardOutput.ReadLine()
            if ($null -ne $line) {
                $text = $line + "`n"
                $outputAll += $text
                Send-WsMessage -Ws $Ws -Message @{
                    type = "output"
                    id = $Id
                    stream = "stdout"
                    data = $text
                }
            }
        }

        $stderr = $proc.StandardError.ReadToEnd()
        if ($stderr) {
            $outputAll += $stderr
            Send-WsMessage -Ws $Ws -Message @{
                type = "output"
                id = $Id
                stream = "stderr"
                data = $stderr
            }
        }

        $proc.WaitForExit()
        $exitCode = $proc.ExitCode
    }
    catch {
        $errText = "Error: $($_.Exception.Message)`n"
        $outputAll += $errText
        Send-WsMessage -Ws $Ws -Message @{
            type = "output"
            id = $Id
            stream = "stderr"
            data = $errText
        }
        $exitCode = 1
    }

    return @{ ExitCode = $exitCode; Output = $outputAll }
}

# ── Receive helper ──────────────────────────────────────────────
function Receive-WsMessage {
    param(
        [System.Net.WebSockets.ClientWebSocket]$Ws,
        [int]$TimeoutMs = 2000
    )

    if ($Ws.State -ne [System.Net.WebSockets.WebSocketState]::Open) { return $null }

    $buffer = New-Object byte[] 65536
    $segment = New-Object System.ArraySegment[byte] -ArgumentList (,$buffer)
    $cts = New-Object System.Threading.CancellationTokenSource
    $cts.CancelAfter($TimeoutMs)

    try {
        $result = $Ws.ReceiveAsync($segment, $cts.Token).GetAwaiter().GetResult()

        if ($result.MessageType -eq [System.Net.WebSockets.WebSocketMessageType]::Close) {
            $cts.Dispose()
            return @{ type = "__close" }
        }

        $received = [System.Text.Encoding]::UTF8.GetString($buffer, 0, $result.Count)

        while (-not $result.EndOfMessage) {
            $result = $Ws.ReceiveAsync($segment, $cts.Token).GetAwaiter().GetResult()
            $received += [System.Text.Encoding]::UTF8.GetString($buffer, 0, $result.Count)
        }

        $cts.Dispose()
        return ($received | ConvertFrom-Json)
    }
    catch [System.OperationCanceledException] {
        $cts.Dispose()
        return $null
    }
    catch {
        $cts.Dispose()
        return @{ type = "__error"; message = $_.Exception.Message }
    }
}

# ── Main loop ───────────────────────────────────────────────────
function Start-RelayClient {
    while ($true) {
        $ws = $null
        try {
            Show-Status -SessionName $Name -Status "Connecting..."

            $ws = New-Object System.Net.WebSockets.ClientWebSocket
            $ws.Options.KeepAliveInterval = [TimeSpan]::FromSeconds(30)
            $uri = New-Object System.Uri($RelayUrl)
            $token = [System.Threading.CancellationToken]::None

            $ws.ConnectAsync($uri, $token).GetAwaiter().GetResult() | Out-Null

            # Register
            Send-WsMessage -Ws $ws -Message @{
                type        = "register"
                name        = $Name
                os          = "win32"
                nodeVersion = "powershell-$($PSVersionTable.PSVersion)"
            }

            Show-Status -SessionName $Name -Status "Waiting..."

            # Message loop
            while ($ws.State -eq [System.Net.WebSockets.WebSocketState]::Open) {
                $msg = Receive-WsMessage -Ws $ws -TimeoutMs 2000

                if ($null -eq $msg) { continue }

                if ($msg.type -eq "__close") { break }
                if ($msg.type -eq "__error") {
                    Write-Host "  Warning: $($msg.message)" -ForegroundColor Yellow
                    break
                }

                if ($msg.type -eq "registered") {
                    Show-Status -SessionName $Name -Status "Waiting..."
                    continue
                }

                if ($msg.type -eq "exec") {
                    # Shorten command for display
                    $cmdShort = $msg.command
                    if ($cmdShort.Length -gt 40) {
                        $cmdShort = $cmdShort.Substring(0, 40) + "..."
                    }

                    Show-Status -SessionName $Name -Status "Running..."
                    Write-Host "  >> [$(Get-Timestamp)] $cmdShort"

                    $result = Invoke-RelayCommand -Id $msg.id -Command $msg.command -Ws $ws

                    # Result icon
                    $icon = "X"
                    if ($result.ExitCode -eq 0) { $icon = "OK" }

                    # Last line of output for summary
                    $resultShort = "exit $($result.ExitCode)"
                    $trimmed = $result.Output.Trim()
                    if ($trimmed.Length -gt 0) {
                        $lines = $trimmed.Split("`n")
                        $lastLine = $lines[$lines.Length - 1]
                        if ($lastLine.Length -gt 30) {
                            $resultShort = $lastLine.Substring(0, 30)
                        }
                        elseif ($lastLine.Length -gt 0) {
                            $resultShort = $lastLine
                        }
                    }

                    $script:LogBuffer.Add(@{ Icon = ">> [$(Get-Timestamp)]"; Text = $cmdShort }) | Out-Null
                    $script:LogBuffer.Add(@{ Icon = $icon; Text = $resultShort }) | Out-Null

                    Send-WsMessage -Ws $ws -Message @{
                        type     = "done"
                        id       = $msg.id
                        exitCode = $result.ExitCode
                    }

                    Show-Status -SessionName $Name -Status "Waiting..."
                }
            }
        }
        catch {
            Write-Host ""
            Write-Host "Connection error: $($_.Exception.Message)" -ForegroundColor Red
        }
        finally {
            if ($ws) {
                try {
                    $ws.Dispose()
                }
                catch {
                    # ignore
                }
            }
        }

        Write-Host "Reconnecting in 3 seconds..."
        Start-Sleep -Seconds 3
    }
}

# ── Entry point ─────────────────────────────────────────────────
try {
    Start-RelayClient
}
catch {
    if ($_.Exception.GetType().Name -eq "PipelineStoppedException") {
        Write-Host "`nExiting..."
    }
    else {
        throw
    }
}
