@echo off
color 0C
title CourseHub Free - Flutter Frontend
cls

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║  📱 CourseHub Free - Frontend Flutter                  ║
echo ╚════════════════════════════════════════════════════════╝
echo.

flutter --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Flutter no está instalado
    echo.
    echo Instala Flutter aquí:
    echo https://flutter.dev/docs/get-started/install/windows
    echo.
    pause
    exit /b 1
)

cd frontend_flutter

if not exist .packages (
    echo Instalando dependencias Flutter...
    flutter pub get
)

echo 🚀 Iniciando Flutter...
echo Selecciona dispositivo (Chrome, Edge, Emulador)
echo.
flutter run

pause
