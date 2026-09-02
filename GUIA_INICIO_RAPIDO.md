# 🚀 GUÍA DE INICIO RÁPIDO - CourseHub Free

## Bienvenida 👋

Esta guía te ayudará a comenzar el proyecto **CourseHub Free** paso a paso. ¡Vamos!

---

## 📋 PRE-REQUISITOS

Asegúrate de tener instalado:

```bash
✅ Flutter SDK 3.0+ 
✅ Node.js 16+
✅ Git
✅ Editor (VS Code, Android Studio, IntelliJ)
```

**Verificar instalaciones:**
```bash
flutter --version
node --version
npm --version
```

---

## 🎯 PASO 1: CREAR LA ESTRUCTURA DEL PROYECTO

### Opción A: Automática (Recomendado)

```bash
# Descarga el script
# Luego ejecuta:
bash setup_project.sh

# Resultado: Se crea carpeta coursehub-free/ con toda la estructura
cd coursehub-free
```

### Opción B: Manual

```bash
mkdir coursehub-free
cd coursehub-free

# Crear carpetas principales
mkdir -p frontend_flutter backend_nodejs admin_panel database docs
```

---

## 📱 PASO 2: CONFIGURAR FLUTTER FRONTEND

### 2.1 Crear o configurar proyecto Flutter

```bash
cd frontend_flutter

# Opción A: Crear nuevo proyecto
flutter create .

# Opción B: Si ya existe, solo instalar dependencias
flutter pub get
```

### 2.2 Copiar modelos iniciales

Copia el contenido de `initial_dart_models.dart` a:

```
lib/
├── models/
│   ├── user_model.dart
│   ├── course_model.dart
│   ├── lesson_model.dart
│   ├── enrollment_model.dart
│   └── certificate_model.dart
```

### 2.3 Actualizar pubspec.yaml

Reemplaza el contenido con el que se generó en la carpeta del proyecto.

```bash
flutter pub get
```

### 2.4 Verificar que Flutter funcione

```bash
flutter run
```

---

## 🔧 PASO 3: CONFIGURAR BACKEND NODE.JS

### 3.1 Instalar dependencias

```bash
cd ../backend_nodejs
npm install
```

### 3.2 Crear archivo .env

```bash
# Copiar del ejemplo
cp .env.example .env

# Editar con tus valores
nano .env
```

**Variables necesarias:**

```env
PORT=3000
NODE_ENV=development
JWT_SECRET=tu_clave_super_secreta_aqui_12345
FIREBASE_PROJECT_ID=tu_proyecto_firebase
MONGODB_URI=mongodb://localhost:27017/coursehub
```

### 3.3 Crear archivo inicial app.js

```bash
cat > src/app.js << 'EOF'
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas (se agregarán después)
app.get('/', (req, res) => {
  res.json({ message: 'API CourseHub Free funcionando ✅' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
EOF
```

### 3.4 Probar que funcione

```bash
npm run dev
# Deberías ver: 🚀 Server running on port 3000
```

Visita: `http://localhost:3000` en tu navegador

---

## 🎛️ PASO 4: CONFIGURAR FIREBASE

### 4.1 Crear proyecto en Firebase

1. Ve a [console.firebase.google.com](https://console.firebase.google.com)
2. Crea un nuevo proyecto (o selecciona uno existente)
3. Habilita: **Authentication**, **Firestore**, **Storage**

### 4.2 Descargar credenciales

```
Proyecto → Configuración → Cuentas de servicio
→ Descargar JSON
→ Guardar en backend_nodejs/config/firebase-key.json
```

### 4.3 Configurar Flutter con Firebase

```bash
cd frontend_flutter

# Instalar Firebase CLI
npm install -g firebase-tools

# Configurar Flutter con Firebase
flutterfire configure
```

Sigue las instrucciones en pantalla y selecciona tu proyecto Firebase.

---

## 💾 PASO 5: CONFIGURAR BASE DE DATOS

### 5.1 Firestore (Recomendado para empezar)

1. En Firebase Console → Firestore Database
2. Crear base de datos en modo **test** (para desarrollo)
3. Ubicación: Tu región más cercana

### 5.2 Crear colecciones iniciales

En Firestore, crea estas colecciones:

```
users/
courses/
lessons/
enrollments/
certificates/
notifications/
```

---

## 🧪 PASO 6: PRUEBAS INICIALES

### 6.1 Probar Backend

```bash
# Terminal 1: Backend corriendo
cd backend_nodejs
npm run dev

# Terminal 2: Hacer petición
curl http://localhost:3000
```

### 6.2 Probar Flutter

```bash
cd frontend_flutter
flutter run

# Para web:
flutter run -d web
```

### 6.3 Probar Firebase desde Flutter

En `lib/main.dart`:

```dart
import 'package:firebase_core/firebase_core.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const MyApp());
}
```

---

## 📂 ESTRUCTURA LISTA PARA USAR

Después de completar estos pasos, tu carpeta se verá así:

```
coursehub-free/
├── frontend_flutter/
│   ├── lib/
│   │   ├── models/ ✅ (con todos los modelos)
│   │   ├── main.dart ✅ (configurado con Firebase)
│   │   └── ...
│   ├── pubspec.yaml ✅
│   └── ...
│
├── backend_nodejs/
│   ├── src/
│   │   ├── app.js ✅ (servidor corriendo)
│   │   └── ...
│   ├── .env ✅ (configurado)
│   ├── package.json ✅
│   └── ...
│
├── PROYECTO_CURSOS_GRATIS_SPEC.md ✅
└── GUIA_INICIO_RAPIDO.md ✅
```

---

## 🎯 SIGUIENTE PASO: MÓDULO DE AUTENTICACIÓN

Una vez que todo esté configurado, empieza con:

### Fase 1: Autenticación (1-2 semanas)

**Flutter (Frontend):**
- [ ] Crear pantalla de Login
- [ ] Crear pantalla de Registro  
- [ ] Integrar Firebase Authentication
- [ ] Guardar token JWT localmente

**Node.js (Backend):**
- [ ] Crear endpoints de login/registro
- [ ] Generar JWT tokens
- [ ] Crear middleware de autenticación
- [ ] Validación de emails

**Tareas:**
```bash
# Crear archivos iniciales
cd frontend_flutter/lib

# Crear servicio de autenticación
cat > services/auth_service.dart << 'EOF'
import 'package:firebase_auth/firebase_auth.dart';

class AuthService {
  final FirebaseAuth _firebaseAuth = FirebaseAuth.instance;

  // Iniciar sesión
  Future<User?> signIn(String email, String password) async {
    try {
      UserCredential userCredential =
          await _firebaseAuth.signInWithEmailAndPassword(
        email: email,
        password: password,
      );
      return userCredential.user;
    } catch (e) {
      print('Error al iniciar sesión: $e');
      return null;
    }
  }

  // Registrar nuevo usuario
  Future<User?> signUp(String email, String password) async {
    try {
      UserCredential userCredential =
          await _firebaseAuth.createUserWithEmailAndPassword(
        email: email,
        password: password,
      );
      return userCredential.user;
    } catch (e) {
      print('Error al registrarse: $e');
      return null;
    }
  }

  // Cerrar sesión
  Future<void> signOut() async {
    await _firebaseAuth.signOut();
  }

  // Obtener usuario actual
  User? get currentUser => _firebaseAuth.currentUser;
}
EOF
```

---

## 💡 TIPS PROFESIONALES

### Git y Control de Versiones

```bash
# En la raíz del proyecto
git init
git add .
git commit -m "Initial commit: CourseHub Free setup"

# Crear rama para desarrollo
git checkout -b develop
```

### Estructura de Ramas

```
main (producción)
  ↓
develop (desarrollo)
  ├── feature/auth
  ├── feature/courses-catalog
  ├── feature/enrollment
  └── feature/admin-panel
```

### Convención de commits

```bash
git commit -m "feat: agregar modelo de curso"
git commit -m "fix: corregir bug en login"
git commit -m "docs: actualizar README"
```

### Logging y Debugging

```dart
// En Flutter, usar Logger profesional
// Para debug: print() está bien por ahora
// Para producción: usar logger package

print('📱 CourseHub Debug: $variable');
```

---

## 🐛 TROUBLESHOOTING

### Error: "Flutter not found"
```bash
# Agregar Flutter al PATH
export PATH="$PATH:/path/to/flutter/bin"
```

### Error: "Firebase initialization failed"
```bash
# Verificar que google-services.json esté en android/app/
# Verificar que GoogleService-Info.plist esté en ios/Runner/
```

### Error: "npm ERR! code ERESOLVE"
```bash
npm install --legacy-peer-deps
```

### Puerto 3000 ya está en uso
```bash
# Cambiar puerto en .env
PORT=3001

# O buscar qué usa el puerto 3000
lsof -i :3000
kill -9 <PID>
```

---

## 📞 RECURSOS ÚTILES

- **Flutter Docs:** https://flutter.dev/docs
- **Firebase Docs:** https://firebase.google.com/docs
- **Express.js Docs:** https://expressjs.com
- **Firestore Docs:** https://firebase.google.com/docs/firestore

---

## ✅ CHECKLIST DE CONFIGURACIÓN

Marca cada paso completado:

```
FLUTTER
  ☐ Flutter SDK instalado
  ☐ Proyecto Flutter creado
  ☐ pubspec.yaml configurado
  ☐ Modelos creados
  ☐ Firebase configurado en Flutter
  ☐ App se ejecuta correctamente

BACKEND
  ☐ Node.js instalado
  ☐ Dependencias npm instaladas
  ☐ .env creado y configurado
  ☐ app.js funciona
  ☐ Puerto 3000 accesible

FIREBASE
  ☐ Proyecto creado
  ☐ Authentication habilitado
  ☐ Firestore habilitado
  ☐ Storage habilitado
  ☐ Colecciones creadas

GENERAL
  ☐ Git inicializado
  ☐ .gitignore configurado
  ☐ Documentación leída
  ☐ Todo probado y funcionando
```

---

## 🎉 ¡LISTO PARA EMPEZAR!

Ahora que tienes todo configurado, puedes:

1. ✅ Hacer un commit inicial
2. ✅ Crear la rama de desarrollo
3. ✅ Empezar con el módulo de autenticación
4. ✅ Seguir el plan de fases

**Comando final:**

```bash
# Desde la raíz del proyecto
git status
git add .
git commit -m "setup: project initialization complete"
git log --oneline
```

---

**¿Preguntas?** Revisa la especificación completa en `PROYECTO_CURSOS_GRATIS_SPEC.md`

**¡Mucho éxito con CourseHub Free! 🚀**

---

*Última actualización: Septiembre 02, 2026*
