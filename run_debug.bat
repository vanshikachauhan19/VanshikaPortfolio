@echo off
echo Starting server... > debug_output.txt
npm run dev >> debug_output.txt 2>&1
