@echo off
color 0E
title CourseHub Free - Backend (Node.js)
cls

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║  🔧 CourseHub Free - Backend                           ║
echo ║  Puerto: 3000                                          ║
echo ╚════════════════════════════════════════════════════════╝
echo.

cd backend_nodejs

if not exist node_modules (
    echo ❌ Dependencias no instaladas
    echo Ejecuta primero: INSTALAR.bat
    pause
    exit /b 1
)

echo 🚀 Iniciando servidor...
echo.
npm run dev

pause
