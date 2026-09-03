# 📚 Ejemplos - CourseHub Free

Carpeta de ejemplos HTML/CSS/JavaScript listos para usar en la plataforma CourseHub Free.

---

## 📁 Archivos Incluidos

### 1. **`index.html`** - Landing Page Profesional
Página de inicio completa con:
- ✅ Navbar responsiva
- ✅ Hero Section atractiva
- ✅ Sección de Características (6 tarjetas)
- ✅ Estadísticas en tiempo real
- ✅ Grid de cursos populares (6 ejemplos)
- ✅ Footer con links
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll y animaciones

**Uso:**
```bash
# Abre directamente en el navegador
open examples/index.html
# O usalo como plantilla para tu landing page
```

**Características destacadas:**
- Gradiente morado-rosa profesional
- Cards con hover effects
- Rating system en cursos
- Botones interactivos
- 100% HTML/CSS/JS puro

---

### 2. **`register-form.html`** - Formulario de Registro Avanzado
Formulario completo con validaciones:
- ✅ Validación de email
- ✅ Validador de fortaleza de contraseña
- ✅ Confirmación de contraseña
- ✅ Selector de país
- ✅ Campo de teléfono opcional
- ✅ Términos y condiciones
- ✅ Mensajes de error en tiempo real
- ✅ Mensaje de éxito

**Validaciones incluidas:**
- Email válido (regex)
- Contraseña mínimo 8 caracteres
- Fortaleza de contraseña (débil/media/fuerte)
- Coincidencia de contraseñas
- Términos aceptados

**Integración:**
```javascript
// Conectar con tu backend
fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    })
});
```

---

### 3. **`api-documentation.html`** - Documentación Interactiva
Documentación completa y profesional de la API:
- ✅ Listado de endpoints (Usuarios, Cursos, Auth, Reports)
- ✅ Métodos HTTP (GET, POST, PUT, DELETE)
- ✅ Parámetros y Body ejemplos
- ✅ Respuestas JSON formateadas
- ✅ Tablas de parámetros
- ✅ Sidebar navegable
- ✅ Botones para probar endpoints
- ✅ Responsive design

**Endpoints documentados:**
```
GET    /api/users                    - Lista todos los usuarios
POST   /api/users                    - Crea nuevo usuario
PUT    /api/users/:id                - Actualiza usuario
DELETE /api/users/:id                - Elimina usuario

GET    /api/courses                  - Lista cursos
POST   /api/courses                  - Crea curso
PUT    /api/courses/:id              - Actualiza curso
DELETE /api/courses/:id              - Elimina curso

POST   /api/auth/login               - Login usuario
GET    /api/reports/dashboard        - Estadísticas
```

**Uso:**
- Comparte con desarrolladores
- Usa como documentación oficial
- Integra con herramientas como Swagger

---

## 🚀 Cómo Usar Estos Ejemplos

### **Opción 1: Usar directamente en navegador**
```bash
cd examples
# En Windows
start index.html
# En Mac
open index.html
# En Linux
firefox index.html
```

### **Opción 2: Integrar en tu proyecto React**
```jsx
// Copiar CSS a tu proyecto
// Copiar lógica JavaScript a componentes React
// Adaptar a tus necesidades
```

### **Opción 3: Usar como base para nuevas páginas**
1. Copia el HTML que necesitas
2. Modifica estilos según tu marca
3. Conecta a tu backend
4. Deploy

---

## 🎨 Personalización

### **Cambiar colores (gradiente morado)**
Busca en el CSS:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Reemplaza con tus colores:
```css
background: linear-gradient(135deg, #TuColor1 0%, #TuColor2 100%);
```

### **Cambiar textos y contenido**
- Landing: Edita títulos, descripciones, cursos
- Formulario: Cambia campos según necesites
- API Docs: Actualiza endpoints reales

### **Agregar más cursos**
```html
<div class="course-card">
    <div class="course-image">🎓</div>
    <div class="course-content">
        <h3>Tu Curso</h3>
        <p>Descripción</p>
        <div class="course-footer">
            <span class="rating">⭐⭐⭐⭐⭐ (123)</span>
            <button class="btn-secondary">Inscribirse</button>
        </div>
    </div>
</div>
```

---

## 📊 Estadísticas de Archivo

| Archivo | Tamaño | Líneas | Features |
|---------|--------|--------|----------|
| `index.html` | 12 KB | 450 | Landing, 6 secciones |
| `register-form.html` | 8 KB | 350 | Form, validaciones |
| `api-documentation.html` | 15 KB | 600 | Docs, 12 endpoints |
| `README.md` | 3 KB | 200 | Guía completa |

**Total:** ~38 KB, 100% responsivo, 0 dependencias externas

---

## 🔗 Integración Backend

### **Conectar formulario de registro**
```javascript
// Reemplaza en register-form.html
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    });
    
    if (response.ok) {
        alert('¡Registro exitoso!');
    }
});
```

### **Llenar datos de API**
```javascript
// Ejemplo para landing page
async function loadCourses() {
    const response = await fetch('http://localhost:3000/api/courses');
    const data = await response.json();
    
    // Renderizar cursos dinámicamente
    data.forEach(course => {
        // Crear HTML con datos reales
    });
}

loadCourses();
```

---

## ✅ Testing & QA

### **Checklist antes de usar:**
- [ ] Abre en navegador: ¿se ve bien?
- [ ] Mobile: ¿es responsivo?
- [ ] Formulario: ¿valida correctamente?
- [ ] Enlaces: ¿funcionan el smooth scroll?
- [ ] Botones: ¿son clicables?
- [ ] Performance: ¿carga rápido?

---

## 🚀 Deploy

### **Opción A: Firebase Hosting**
```bash
firebase login
firebase init hosting
firebase deploy
```

### **Opción B: Netlify**
```bash
# Sube la carpeta examples a Netlify
# URL: https://tuapp.netlify.app/examples/
```

### **Opción C: Tu servidor**
```bash
# Copia los archivos a /public o /www
cp examples/*.html /var/www/html/
```

---

## 📝 Notas Importantes

1. **Sin dependencias externas** - Solo HTML/CSS/JavaScript
2. **Compatible con todos los navegadores** modernos
3. **Móvil primero** - Diseño responsive
4. **Accesibilidad** - Semántica HTML5 correcta
5. **Performance** - Optimizado para velocidad

---

## 🤝 Contribuciones

¿Tienes sugerencias? Puedes:
1. Forkear el repositorio
2. Crear ejemplos adicionales
3. Mejorar los existentes
4. Reportar bugs

---

## 📄 Licencia

Estos ejemplos son parte de **CourseHub Free** y están bajo la misma licencia del proyecto.

---

## 📞 Soporte

- **Email:** leonel@coursehub.com
- **GitHub:** https://github.com/LEONEL01295/Pag-Cursos
- **Issues:** https://github.com/LEONEL01295/Pag-Cursos/issues

---

**Última actualización:** Septiembre 2026
**Versión:** 2.0
**Estado:** ✅ Listo para producción
