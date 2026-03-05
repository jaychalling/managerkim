@echo off
echo.
echo   Easy ClCo - Launching installer...
echo.
start "" /wait powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "[Console]::OutputEncoding=[System.Text.Encoding]::UTF8; $OutputEncoding=[System.Text.Encoding]::UTF8; chcp 65001|Out-Null; irm 'https://managerkim.com/downloads/install-windows.ps1' | iex; Write-Host ''; Read-Host '  Enter to close'"
