@echo off
setlocal
cd /d "%~dp0"

set PORT=8123
set URL=http://127.0.0.1:%PORT%/index.html

echo.
echo   LaslesVPN landing page
echo   ------------------------------------------
echo   Address : %URL%
echo   Folder  : %CD%
echo   Stop    : press Ctrl+C
echo.

start "" cmd /c "timeout /t 2 >nul & start """" %URL%"

where python >nul 2>nul
if %ERRORLEVEL%==0 (
  python -m http.server %PORT% --bind 127.0.0.1
  goto :eof
)

where py >nul 2>nul
if %ERRORLEVEL%==0 (
  py -m http.server %PORT% --bind 127.0.0.1
  goto :eof
)

where npx >nul 2>nul
if %ERRORLEVEL%==0 (
  npx --yes serve . -l %PORT%
  goto :eof
)

echo   Python or Node.js was not found.
echo   Install Python (https://www.python.org/downloads/) and run this file again.
pause
