# 🪟 CourseHub Free - Guía Windows

## ✅ PASO 1: Requisitos

Verifica que tengas instalado en Windows:

```powershell
node --version    # Debe mostrar v16 o superior
npm --version     # Cualquier versión reciente
```

**¿No tienes instalado?**
- Descarga Node.js: https://nodejs.org/ (elige LTS)
- Instala normalmente

---

## ⚡ OPCIÓN A: INSTALACIÓN AUTOMÁTICA (Recomendado)

### 1️⃣ Haz doble clic en: `INSTALAR.bat`

Esperará a que termine (verás mensajes en verde ✅)

### 2️⃣ Luego abre 3 PowerShell o CMD diferentes:

**Ventana 1 - Backend:**
```bash
EJECUTAR_BACKEND.bat
```

**Ventana 2 - Admin:**
```bash
EJECUTAR_ADMIN.bat
```

**Ventana 3 - Flutter (Opcional):**
```bash
EJECUTAR_FLUTTER.bat
```

---

## 📝 OPCIÓN B: INSTALACIÓN MANUAL

### 1️⃣ Abre PowerShell en la carpeta `coursehub-free`

### 2️⃣ Instala Backend

```powershell
cd backend_nodejs
npm install
cd ..
```

Verás avisos (warnings) amarillos - son normales ✅

### 3️⃣ Instala Admin Panel

```powershell
cd admin_panel
npm install
cd ..
```

### 4️⃣ Instala Flutter (Opcional)

```powershell
cd frontend_flutter
flutter pub get
cd ..
```

**¿Error de Flutter?** Necesitas Git instalado:
- Descarga: https://git-scm.com/download/win
- Instala normalmente
- Reinicia PowerShell

---

## 🚀 EJECUTAR LOS SERVIDORES

Abre **3 PowerShell diferentes** en la carpeta `coursehub-free`:

### PowerShell 1 - Backend (Puerto 3000)

```powershell
cd backend_nodejs
npm run dev
```

**Espera a ver:**
```
🚀 Servidor corriendo en puerto 3000
```

---

### PowerShell 2 - Admin Panel (Puerto 5173)

```powershell
cd admin_panel
npm run dev
```

**Luego abre:**
```
http://localhost:5173
```

---

### PowerShell 3 - Flutter (Opcional)

```powershell
cd frontend_flutter
flutter run
```

**Selecciona:** `[1] Chrome` o `[2] Edge`

---

## 🎯 URLs DESPUÉS DE EJECUTAR

```
🌐 Admin Panel:  http://localhost:5173      ← Interfaz visual
🔧 Backend API:  http://localhost:3000      ← API endpoints
📱 Frontend:     http://localhost:5173      ← (Flutter web)
```

---

## ✅ VERIFICAR QUE FUNCIONA

### Backend funciona si ves:

```
╔════════════════════════════════╗
║  🚀 CourseHub Free Backend     ║
║  Servidor corriendo en 3000    ║
╚════════════════════════════════╝
```

### Admin Panel funciona si:

- Abre http://localhost:5173
- Ves interfaz con tarjetas azules

### Flutter funciona si:

- Se abre Chrome/Edge
- Ves el splash screen CourseHub

---

## 🐛 PROBLEMAS COMUNES EN WINDOWS

### ❌ "npm: The term 'npm' is not recognized"

**Solución:**
1. Descarga Node.js: https://nodejs.org/
2. Instala
3. Reinicia PowerShell
4. Intenta de nuevo

---

### ❌ "Port 3000 already in use"

**Solución rápida:**
```powershell
# Mira qué usa el puerto:
netstat -ano | findstr :3000

# Cambiar puerto en backend_nodejs/.env
PORT=3001
```

---

### ❌ "Cannot find module" en Backend

**Solución:**
```powershell
cd backend_nodejs
npm install --legacy-peer-deps
cd ..
```

---

### ❌ "Flutter: Git not found"

**Solución:**
1. Instala Git: https://git-scm.com/download/win
2. Reinicia PowerShell
3. Intenta flutter pub get de nuevo

---

### ❌ "Chrome not found" en Flutter

**Usa Edge en lugar:**
```powershell
flutter run -d edge
```

---

## 📁 ESTRUCTURA DEL PROYECTO

```
coursehub-free/
├── frontend_flutter/
│   ├── lib/
│   │   ├── main.dart           ← App Flutter
│   │   ├── models/             ← Modelos de datos
│   │   └── config/             ← Configuración
│   └── pubspec.yaml
│
├── backend_nodejs/
│   ├── src/
│   │   ├── app.js              ← Servidor Express
│   │   ├── controllers/        ← Lógica
│   │   └── routes/             ← Rutas
│   └── package.json
│
├── admin_panel/
│   ├── index.html              ← Interfaz admin
│   └── package.json
│
├── INSTALAR.bat                ← Ejecuta primero
├── EJECUTAR_BACKEND.bat        ← Backend
├── EJECUTAR_ADMIN.bat          ← Admin
└── EJECUTAR_FLUTTER.bat        ← Frontend

```

---

## 📚 DOCUMENTACIÓN DISPONIBLE

```
PROYECTO_CURSOS_GRATIS_SPEC.md   ← Especificación completa
GUIA_INICIO_RAPIDO.md            ← Guía paso a paso
DESCARGA_Y_EJECUTA.md            ← Instrucciones descarga
README.md                        ← Info proyecto
```

---

## 🎯 SIGUIENTE: GIT Y GITHUB

Después de verificar que todo funciona:

```powershell
# Inicializar Git
git init

# Agregar archivos
git add .

# Commit
git commit -m "🎉 Initial commit: CourseHub Free running on Windows"

# Agregar repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/coursehub-free

# Push
git push -u origin main
```

---

## 💡 TIPS WINDOWS

### Abrir PowerShell en la carpeta

1. Mantén Shift + Click derecho en la carpeta
2. "Abrir PowerShell aquí"

### Detener servidor

- Presiona `Ctrl + C` en la terminal

### Abrir carpeta en VS Code

```powershell
code .
```

### Ver archivos ocultos

- Menú View → Mostrar archivos ocultos

---

## 🚀 RÁPIDO RESUMEN

**Instalación:**
```powershell
INSTALAR.bat
```

**Ejecutar (en 3 ventanas):**
```powershell
EJECUTAR_BACKEND.bat
EJECUTAR_ADMIN.bat
EJECUTAR_FLUTTER.bat
```

**Abrir:**
```
http://localhost:5173  ← Admin Panel
http://localhost:3000  ← Backend
```

---

## ✨ ¿LISTO?

Si ves:
- ✅ Backend corriendo
- ✅ Admin abierto en navegador
- ✅ Flutter en Chrome/Edge

**¡FELICIDADES! Tienes CourseHub Free funcionando en Windows 🎉**

---

## 📞 SOLUCIÓN RÁPIDA SI ALGO FALLA

1. Cierra todas las terminales
2. Ejecuta: `INSTALAR.bat`
3. Ejecuta los .bat de nuevo

Si sigue fallando:
- Verifica: Node.js instalado
- Verifica: Puerto 3000 libre
- Verifica: Carpeta coursehub-free

---

**¡Mucho éxito con CourseHub Free en Windows! 🪟🚀**

*Última actualización: Septiembre 2026*
