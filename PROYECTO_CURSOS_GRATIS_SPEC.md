# 📚 PLATAFORMA DE CURSOS GRATIS
## Documento de Especificación Técnica y Funcional

---

## 1. VISIÓN GENERAL

**Nombre del Proyecto:** CourseHub Free  
**Tipo:** Plataforma educativa de cursos online gratuitos  
**Stack:** Flutter (móvil + web) + Firebase + Node.js/Express (backend opcional)  
**Estado:** Proyecto Nuevo  
**Fecha:** Septiembre 2026

### Objetivo
Crear una plataforma profesional de distribución de cursos gratis con sistema completo de gestión, inscripción, seguimiento de estudiantes, certificados y un panel administrativo robusto.

---

## 2. FEATURES POR MÓDULOS

### A. MÓDULO ESTUDIANTE (Frontend - Flutter)

#### 2.1 Autenticación & Perfil
- [x] Login con email/password
- [x] Registro de nuevos estudiantes
- [x] Recuperación de contraseña
- [x] Perfil de usuario (foto, bio, datos)
- [x] Edición de perfil
- [x] Logout

#### 2.2 Catálogo de Cursos
- [x] Listado de todos los cursos disponibles
- [x] Búsqueda por título, instructor, categoría
- [x] Filtros: nivel, categoría, duración, rating
- [x] Página detalle del curso
- [x] Ver instructor perfil
- [x] Rating y reviews de cursos
- [x] Compartir curso (redes sociales)

#### 2.3 Inscripción & Compra (Sistema Gratis)
- [x] Inscripción a cursos gratuitos
- [x] Sistema de "carrito" (aunque todo es gratis)
- [x] Confirmación de pago simulado
- [x] Comprobante/recibo digital
- [x] Historial de compras/inscripciones

#### 2.4 Dashboard del Estudiante
- [x] Mis cursos (en progreso, completados, pendientes)
- [x] Progreso por curso (% completado)
- [x] Lista de tareas pendientes
- [x] Certificados obtenidos
- [x] Calificaciones
- [x] Estadísticas de aprendizaje

#### 2.5 Lecciones & Contenido
- [x] Visualizar lecciones del curso
- [x] Reproducción de videos
- [x] Descargar materiales (PDF, documentos)
- [x] Marcar lección como completada
- [x] Notas personales por lección
- [x] Foro de dudas (opcional)

#### 2.6 Certificados
- [x] Descarga de certificados en PDF
- [x] Validación de certificados (código único)
- [x] Compartir certificados en redes
- [x] Historial de certificados

#### 2.7 Notificaciones
- [x] Nuevo contenido en cursos inscritos
- [x] Recordatorio de tareas pendientes
- [x] Anuncios del instructor
- [x] Actualizaciones de calificaciones
- [x] Preferencias de notificaciones

#### 2.8 Configuración & Privacidad
- [x] Cambiar contraseña
- [x] Preferencias de notificaciones
- [x] Privacidad de perfil
- [x] Descargar datos personales
- [x] Eliminar cuenta

---

### B. MÓDULO INSTRUCTOR (Frontend - Flutter)

#### 2.9 Dashboard del Instructor
- [x] Resumen de cursos creados
- [x] Estadísticas: estudiantes, ingresos (simulados)
- [x] Rating promedio de cursos

#### 2.10 Gestión de Cursos
- [x] Crear nuevo curso
- [x] Editar información del curso
- [x] Publicar/despublicar curso
- [x] Gestión de lecciones
- [x] Subida de videos
- [x] Subida de materiales

#### 2.11 Estudiantes
- [x] Ver lista de estudiantes inscritos
- [x] Calificar estudiantes
- [x] Ver progreso individual
- [x] Enviar mensajes
- [x] Reportes de asistencia

#### 2.12 Contenido
- [x] Gestor de lecciones
- [x] Editor de contenido (texto enriquecido)
- [x] Gestor de videos
- [x] Gestor de archivos descargables
- [x] Quiz/evaluaciones
- [x] Tareas con rúbricas de calificación

---

### C. MÓDULO ADMINISTRADOR (Admin Panel - Web)

#### 2.13 Dashboard Admin
- [x] KPIs principales (usuarios, cursos, ingresos)
- [x] Gráficos de actividad
- [x] Alertas y estadísticas en tiempo real

#### 2.14 Gestión de Usuarios
- [x] Listar todos los usuarios
- [x] Crear/editar/eliminar usuarios
- [x] Cambiar roles (estudiante, instructor, admin)
- [x] Ver detalles y actividad
- [x] Banear/suspender usuarios
- [x] Exportar datos de usuarios

#### 2.15 Gestión de Cursos
- [x] Aprobar/rechazar cursos
- [x] Editar información de cursos
- [x] Pausar/eliminar cursos
- [x] Ver métricas por curso
- [x] Manejar reportes de contenido

#### 2.16 Reportes & Analítica
- [x] Reportes de estudiantes
- [x] Reportes de instructores
- [x] Análisis de ingresos (simulados)
- [x] Reportes de satisfacción
- [x] Exportar reportes (Excel, PDF)

#### 2.17 Configuración del Sistema
- [x] Gestión de categorías
- [x] Gestión de niveles de dificultad
- [x] Configuración de notificaciones
- [x] Gestión de permisos
- [x] Auditoría de cambios

#### 2.18 Soporte & Comunicaciones
- [x] Sistema de tickets de soporte
- [x] Envío de notificaciones masivas
- [x] Gestión de banners/promociones
- [x] Newsletter

---

## 3. ARQUITECTURA TÉCNICA

### 3.1 Stack Tecnológico

```
FRONTEND (Flutter)
├── Flutter 3.x+
├── Provider (state management)
├── GetX (navigation & state)
├── http / dio (API calls)
├── Firebase (auth, storage)
└── PDF generation

BACKEND (Node.js/Express)
├── Express.js
├── Firebase Admin SDK
├── Mongoose (MongoDB)
├── JWT (autenticación)
├── Multer (upload archivos)
└── nodemailer (emails)

DATABASE
├── Firebase Realtime/Firestore
├── MongoDB (opcional para datos complejos)
└── Firebase Storage (archivos, videos)

ADMIN PANEL (Web)
├── React 18 o Flutter Web
├── Firebase SDK
├── Charts (ApexCharts)
└── Table libraries
```

### 3.2 Estructura de Carpetas

```
coursehub-free/
├── frontend_flutter/
│   ├── lib/
│   │   ├── main.dart
│   │   ├── config/
│   │   │   ├── theme.dart
│   │   │   ├── routes.dart
│   │   │   └── constants.dart
│   │   ├── models/
│   │   │   ├── user_model.dart
│   │   │   ├── course_model.dart
│   │   │   ├── lesson_model.dart
│   │   │   ├── enrollment_model.dart
│   │   │   └── certificate_model.dart
│   │   ├── services/
│   │   │   ├── auth_service.dart
│   │   │   ├── course_service.dart
│   │   │   ├── firebase_service.dart
│   │   │   └── payment_service.dart
│   │   ├── providers/
│   │   │   ├── auth_provider.dart
│   │   │   ├── course_provider.dart
│   │   │   └── enrollment_provider.dart
│   │   ├── screens/
│   │   │   ├── auth/
│   │   │   │   ├── login_screen.dart
│   │   │   │   └── register_screen.dart
│   │   │   ├── student/
│   │   │   │   ├── home_screen.dart
│   │   │   │   ├── course_list_screen.dart
│   │   │   │   ├── course_detail_screen.dart
│   │   │   │   ├── lesson_screen.dart
│   │   │   │   ├── dashboard_screen.dart
│   │   │   │   ├── my_courses_screen.dart
│   │   │   │   ├── profile_screen.dart
│   │   │   │   └── certificates_screen.dart
│   │   │   ├── instructor/
│   │   │   │   ├── instructor_dashboard_screen.dart
│   │   │   │   ├── create_course_screen.dart
│   │   │   │   ├── manage_course_screen.dart
│   │   │   │   ├── add_lesson_screen.dart
│   │   │   │   ├── students_screen.dart
│   │   │   │   └── instructor_analytics_screen.dart
│   │   │   └── common/
│   │   │       ├── splash_screen.dart
│   │   │       └── error_screen.dart
│   │   ├── widgets/
│   │   │   ├── course_card.dart
│   │   │   ├── lesson_tile.dart
│   │   │   ├── progress_indicator.dart
│   │   │   ├── custom_button.dart
│   │   │   └── custom_text_field.dart
│   │   └── utils/
│   │       ├── validators.dart
│   │       ├── helpers.dart
│   │       └── app_colors.dart
│   ├── pubspec.yaml
│   └── android/ & ios/
│
├── backend_nodejs/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── courseController.js
│   │   │   ├── lessonController.js
│   │   │   ├── enrollmentController.js
│   │   │   └── certificateController.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Course.js
│   │   │   ├── Lesson.js
│   │   │   ├── Enrollment.js
│   │   │   └── Certificate.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── courseRoutes.js
│   │   │   ├── enrollmentRoutes.js
│   │   │   └── adminRoutes.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   ├── errorHandler.js
│   │   │   └── roleMiddleware.js
│   │   ├── utils/
│   │   │   ├── emailService.js
│   │   │   ├── certificateGenerator.js
│   │   │   └── validators.js
│   │   ├── config/
│   │   │   ├── firebase.js
│   │   │   └── database.js
│   │   └── app.js
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── admin_panel/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Users.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Reports.jsx
│   │   │   └── Settings.jsx
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── index.html
│
├── database/
│   ├── schemas/
│   │   ├── users.schema.js
│   │   ├── courses.schema.js
│   │   ├── lessons.schema.js
│   │   └── enrollments.schema.js
│   └── migrations/
│
├── docs/
│   ├── API_DOCUMENTATION.md
│   ├── ARCHITECTURE.md
│   ├── SETUP_GUIDE.md
│   └── DATABASE_SCHEMA.md
│
└── README.md
```

---

## 4. MODELO DE BASE DE DATOS

### Colecciones Principales (Firestore/MongoDB)

#### Users
```
{
  userId: String (unique),
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String,
  profilePhoto: String (URL),
  bio: String,
  role: Enum [STUDENT, INSTRUCTOR, ADMIN],
  createdAt: Timestamp,
  updatedAt: Timestamp,
  status: Enum [ACTIVE, SUSPENDED, DELETED],
  preferences: {
    notifications: Boolean,
    language: String,
    theme: String
  }
}
```

#### Courses
```
{
  courseId: String (unique),
  title: String,
  description: String,
  category: String,
  level: Enum [BEGINNER, INTERMEDIATE, ADVANCED],
  instructor: Reference to User,
  thumbnail: String (URL),
  banner: String (URL),
  duration: Number (horas),
  rating: Number (0-5),
  reviewCount: Number,
  lessonCount: Number,
  studentCount: Number,
  status: Enum [DRAFT, PUBLISHED, ARCHIVED],
  price: Number (0 para gratis),
  createdAt: Timestamp,
  updatedAt: Timestamp,
  learningOutcomes: Array<String>,
  requirements: Array<String>,
  tags: Array<String>
}
```

#### Lessons
```
{
  lessonId: String (unique),
  courseId: Reference to Course,
  title: String,
  description: String,
  order: Number,
  videoUrl: String,
  duration: Number (minutos),
  materials: Array<{
    name: String,
    url: String,
    type: String (PDF, DOC, etc)
  }>,
  quiz: Reference to Quiz (optional),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

#### Enrollments
```
{
  enrollmentId: String (unique),
  userId: Reference to User,
  courseId: Reference to Course,
  enrolledDate: Timestamp,
  progress: Number (0-100),
  status: Enum [IN_PROGRESS, COMPLETED, DROPPED],
  completedLessons: Array<lessonId>,
  certificateIssued: Boolean,
  certificateId: String,
  grade: Number (0-100),
  lastAccessedDate: Timestamp
}
```

#### Certificates
```
{
  certificateId: String (unique),
  userId: Reference to User,
  courseId: Reference to Course,
  issuedDate: Timestamp,
  certificateCode: String (código único validable),
  downloadUrl: String (URL del PDF),
  status: Enum [VALID, REVOKED]
}
```

#### Notifications
```
{
  notificationId: String (unique),
  userId: Reference to User,
  type: Enum [COURSE_UPDATE, GRADE, CERTIFICATE, ANNOUNCEMENT],
  title: String,
  message: String,
  relatedEntity: Reference,
  read: Boolean,
  createdAt: Timestamp
}
```

---

## 5. PLAN DE DESARROLLO POR FASES

### Fase 1: Setup & Autenticación (Semana 1-2)
- [ ] Crear proyecto Flutter base
- [ ] Configurar Firebase
- [ ] Implementar login/registro
- [ ] Sistema de recuperación de contraseña
- [ ] Validación de tokens JWT
- **Deliverable:** App con login funcional

### Fase 2: Módulo Estudiante - Catálogo (Semana 3-4)
- [ ] Crear modelos de datos
- [ ] Implementar listado de cursos
- [ ] Búsqueda y filtros
- [ ] Página detalle del curso
- [ ] Sistema de ratings
- **Deliverable:** Catálogo de cursos navegable

### Fase 3: Inscripción & Dashboard (Semana 5-6)
- [ ] Sistema de inscripción
- [ ] Carrito (simulado)
- [ ] Dashboard del estudiante
- [ ] Mis cursos
- [ ] Seguimiento de progreso
- **Deliverable:** Estudiante puede inscribirse y ver progreso

### Fase 4: Lecciones & Contenido (Semana 7-8)
- [ ] Reproductor de videos
- [ ] Descarga de materiales
- [ ] Marcar lecciones completadas
- [ ] Notas personales
- [ ] Quiz/evaluaciones
- **Deliverable:** Contenido educativo completo

### Fase 5: Certificados & Notificaciones (Semana 9-10)
- [ ] Sistema de generación de certificados
- [ ] Validación de certificados
- [ ] Sistema de notificaciones push
- [ ] Email notifications
- **Deliverable:** Certificados funcionales y notificaciones

### Fase 6: Módulo Instructor (Semana 11-13)
- [ ] Dashboard del instructor
- [ ] Crear/editar cursos
- [ ] Gestionar lecciones
- [ ] Ver estudiantes
- [ ] Calificar
- **Deliverable:** Instructor puede crear y gestionar cursos

### Fase 7: Admin Panel (Semana 14-16)
- [ ] Crear admin panel web
- [ ] Gestión de usuarios
- [ ] Gestión de cursos
- [ ] Reportes y analítica
- [ ] Configuración del sistema
- **Deliverable:** Admin panel completo

### Fase 8: Pulida & Testing (Semana 17-18)
- [ ] Testing integral
- [ ] Bug fixes
- [ ] Optimización de performance
- [ ] Documentación
- **Deliverable:** App lista para producción

---

## 6. REQUISITOS NO FUNCIONALES

### Performance
- Carga de app < 3 segundos
- Listado de cursos < 2 segundos
- Video streaming sin buffering

### Seguridad
- Encriptación de contraseñas (bcrypt)
- JWT para autenticación
- Validación de inputs (sanitization)
- HTTPS only
- Rate limiting en APIs

### Escalabilidad
- Firebase Auto-scaling
- CDN para videos y archivos
- Database indexing
- Caché local en app

### Usabilidad
- Interfaz intuitiva
- Navegación clara
- Accesibilidad (WCAG 2.1)
- Diseño responsive

### Confiabilidad
- 99.5% uptime
- Backup automático
- Error handling robusto
- Logging completo

---

## 7. TECNOLOGÍAS & LIBRERÍAS ESPECÍFICAS

### Flutter Dependencies
```yaml
provider: ^6.0.0
get: ^4.6.0
dio: ^5.0.0
firebase_core: ^2.0.0
firebase_auth: ^4.0.0
firebase_storage: ^11.0.0
video_player: ^2.4.0
pdf: ^3.10.0
intl: ^0.19.0
http: ^1.1.0
cupertino_icons: ^1.0.2
```

### Node.js Dependencies
```json
"express": "^4.18.0",
"firebase-admin": "^11.0.0",
"mongoose": "^7.0.0",
"jsonwebtoken": "^9.0.0",
"bcryptjs": "^2.4.3",
"multer": "^1.4.5",
"nodemailer": "^6.9.0",
"dotenv": "^16.0.0"
```

---

## 8. MÉTRICAS DE ÉXITO

- ✅ 100% funcionalidad completada
- ✅ 0 bugs críticos
- ✅ 90%+ code coverage (tests)
- ✅ Tiempo de respuesta < 2s promedio
- ✅ Documentación 100% actualizada
- ✅ App funciona en Android, iOS y Web
- ✅ Admin panel responsive

---

## 9. CONTACTO & NOTAS

**Desarrollador:** Leonel Díaz Campuzano  
**Institución:** ITSH - TecNM  
**Email:** leonel.diaz@example.com  
**Teléfono:** (contacto)

---

*Documento creado: Septiembre 2026*  
*Última actualización: Septiembre 02, 2026*
