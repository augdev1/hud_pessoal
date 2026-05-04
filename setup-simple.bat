@echo off
echo Setting up Personal Link Hub...

if not exist "src\components" mkdir src\components
if not exist "public\audio" mkdir public\audio

echo Installing dependencies...
call npm install

echo Starting development server...
call npm run dev
