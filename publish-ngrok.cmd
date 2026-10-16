@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

set PORT=8123
set NGROK=%LOCALAPPDATA%\ngrok\ngrok.exe
set CONFIG=%LOCALAPPDATA%\ngrok\ngrok.yml

echo.
echo   ============================================
echo    LaslesVPN - publish to the internet (ngrok)
echo   ============================================
echo.

if not exist "%NGROK%" (
  echo   [!] ngrok was not found at:
  echo       %NGROK%
  echo.
  echo   Download it from https://ngrok.com/download
  echo   and unzip ngrok.exe into: %LOCALAPPDATA%\ngrok\
  echo.
  pause
  exit /b 1
)

rem ---------- one time: store the account authtoken ----------------
if not exist "%CONFIG%" (
  echo   ngrok needs your free account authtoken (one time only).
  echo   Get it here: https://dashboard.ngrok.com/get-started/your-authtoken
  echo.
  set /p TOKEN=  Paste your authtoken: 
  "%NGROK%" config add-authtoken !TOKEN!
  echo.
)

rem ---------- make sure the site is served locally ----------------
powershell -NoProfile -Command "try{ $c=New-Object Net.Sockets.TcpClient; $c.Connect('127.0.0.1',%PORT%); $c.Close() }catch{ Start-Process -FilePath 'python' -ArgumentList '-m','http.server','%PORT%','--bind','127.0.0.1' -WindowStyle Hidden; Start-Sleep -Seconds 2 }" 2>nul

echo   Local site : http://127.0.0.1:%PORT%/index.html
echo   Dashboard  : http://127.0.0.1:4040
echo.
echo   Copy the "Forwarding" address below and share it.
echo   Press Ctrl+C to stop publishing.
echo.

start "" cmd /c "timeout /t 3 >nul & start http://127.0.0.1:4040"
"%NGROK%" http %PORT%
