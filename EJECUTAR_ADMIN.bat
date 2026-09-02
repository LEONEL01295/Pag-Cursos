@echo off
color 0B
title CourseHub Free - Admin Panel
cls

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║  🎛️  CourseHub Free - Admin Panel                      ║
echo ║  URL: http://localhost:5173                            ║
echo ╚════════════════════════════════════════════════════════╝
echo.

cd admin_panel

if not exist node_modules (
    echo ❌ Dependencias no instaladas
    echo Ejecuta primero: INSTALAR.bat
    pause
    exit /b 1
)

echo 🚀 Iniciando Admin Panel...
echo Abre: http://localhost:5173 en tu navegador
echo.
npm run dev

pause
