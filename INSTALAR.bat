@echo off
color 0A
cls

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║  CourseHub Free - Instalador Automático (Windows)     ║
echo ║  Instala todas las dependencias automáticamente        ║
echo ╚════════════════════════════════════════════════════════╝
echo.

REM Verificar que estamos en la carpeta correcta
if not exist "frontend_flutter" (
    echo ❌ ERROR: No estás en la carpeta coursehub-free
    echo Ejecuta este archivo desde: coursehub-free\INSTALAR.bat
    pause
    exit /b 1
)

REM ====== BACKEND NODE.JS ======
echo.
echo 🔧 Instalando Backend Node.js...
echo ════════════════════════════════════════════════════════
cd backend_nodejs
if exist node_modules (
    echo ✅ Backend ya instalado
) else (
    npm install
    if errorlevel 1 (
        echo ❌ Error instalando backend
        pause
        exit /b 1
    )
)
echo ✅ Backend listo
cd ..

REM ====== ADMIN PANEL ======
echo.
echo 🎛️  Instalando Admin Panel...
echo ════════════════════════════════════════════════════════
cd admin_panel
if exist node_modules (
    echo ✅ Admin Panel ya instalado
) else (
    npm install
    if errorlevel 1 (
        echo ❌ Error instalando admin panel
        echo Intenta manualmente: cd admin_panel ^& npm install
        pause
        exit /b 1
    )
)
echo ✅ Admin Panel listo
cd ..

REM ====== FLUTTER ======
echo.
echo 📱 Verificando Flutter...
echo ════════════════════════════════════════════════════════
flutter --version >nul 2>&1
if errorlevel 1 (
    echo ⚠️  Flutter no detectado
    echo Para usar Flutter en Windows, instala:
    echo https://flutter.dev/docs/get-started/install/windows
    echo.
    echo Nota: Backend y Admin Panel ya están listos sin Flutter
) else (
    cd frontend_flutter
    if exist .packages (
        echo ✅ Flutter ya configurado
    ) else (
        echo Instalando dependencias Flutter...
        flutter pub get
        if errorlevel 1 (
            echo ⚠️  Error en Flutter, pero Backend está listo
        )
    )
    cd ..
    echo ✅ Flutter listo
)

REM ====== RESUMEN ======
echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║  ✅ INSTALACIÓN COMPLETADA                             ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo 📍 Ahora ejecuta:
echo.
echo   1️⃣  EJECUTAR BACKEND (copia esto):
echo       cd backend_nodejs ^& npm run dev
echo.
echo   2️⃣  EJECUTAR ADMIN (en otra terminal):
echo       cd admin_panel ^& npm run dev
echo.
echo   3️⃣  EJECUTAR FLUTTER (en otra terminal):
echo       cd frontend_flutter ^& flutter run
echo.
echo URLs después de ejecutar:
echo   🌐 Admin Panel:  http://localhost:5173
echo   🔧 Backend API:  http://localhost:3000
echo   📱 Frontend:     http://localhost:41577 (varía)
echo.
echo O ejecuta los scripts:
echo   - EJECUTAR_BACKEND.bat
echo   - EJECUTAR_ADMIN.bat
echo   - EJECUTAR_FLUTTER.bat
echo.
pause
