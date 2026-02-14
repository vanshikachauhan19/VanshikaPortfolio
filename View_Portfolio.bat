@echo off
echo ===================================================
echo   Starting Vanshika's Portfolio Server...
echo ===================================================
echo.
echo NOTE: Since we are using modern React (ES Modules), 
echo we must run a local server. You cannot just open the HTML file.
echo.
echo Step 1: Checking build...
if not exist "dist" (
    echo Building project...
    call npm run build
)

echo.
echo Step 2: Starting Server...
echo.
echo ===================================================
echo   Action Required:
echo   1. Wait for the URL to appear below (e.g., http://localhost:4173)
echo   2. STRG+Click the link or Copy/Paste it into Chrome/Edge.
echo ===================================================
echo.

call npm run preview -- --host

pause
