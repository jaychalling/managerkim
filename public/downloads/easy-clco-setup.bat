@echo off
chcp 65001 > nul
cls
echo.
echo   ==========================================
echo    Easy클코 - Claude Code 환경 자동 설치
echo   ==========================================
echo.

:: 같은 폴더에 PS1이 있으면 로컬 실행, 없으면 다운로드
if exist "%~dp0install-windows.ps1" (
    echo   로컬 스크립트를 실행합니다...
    echo.
    powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0install-windows.ps1" %*
) else (
    echo   설치를 준비합니다...
    echo.
    powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; try { iex (irm 'https://managerkim.com/downloads/install-windows.ps1') } catch { Write-Host ''; Write-Host '  다운로드 실패. 인터넷 연결을 확인해주세요.' -ForegroundColor Red; Write-Host '  또는 managerkim.com/setup 에서 다시 받으세요.' -ForegroundColor Yellow; Write-Host '' }"
)

echo.
echo   아무 키나 누르면 창이 닫힙니다.
pause > nul
