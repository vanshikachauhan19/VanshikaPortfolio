@echo off
echo STARTING DEBUG > debug_log.txt
echo NODE VERSION: >> debug_log.txt
node -v >> debug_log.txt 2>&1
echo NPM VERSION: >> debug_log.txt
npm -v >> debug_log.txt 2>&1
echo NETSTAT 5173: >> debug_log.txt
netstat -an | findstr 5173 >> debug_log.txt 2>&1
echo STARTING VITE: >> debug_log.txt
call npm run dev -- --host >> debug_log.txt 2>&1
