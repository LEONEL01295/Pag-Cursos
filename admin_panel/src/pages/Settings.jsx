import { useState } from 'react'
import { Save, Bell, Lock, Palette } from 'lucide-react'
import '../styles/settings.css'

export default function Settings() {
  const [formData, setFormData] = useState({
    siteName: 'CourseHub Free',
    siteUrl: 'https://coursehub.local',
    adminEmail: 'admin@coursehub.com',
    language: 'es',
    emailNotifications: true,
    maintenanceMode: false,
    theme: 'light',
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    localStorage.setItem('settings', JSON.stringify(formData))
    alert('Configuración guardada correctamente')
  }

  return (
    <div className="settings-container">
      <form onSubmit={handleSave}>
        {/* General Settings */}
        <div className="card">
          <div className="card-header">
            <h2>⚙️ Configuración General</h2>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre del Sitio</label>
              <input
                type="text"
                name="siteName"
                value={formData.siteName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>URL del Sitio</label>
              <input
                type="url"
                name="siteUrl"
                value={formData.siteUrl}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email de Administrador</label>
            <input
              type="email"
              name="adminEmail"
              value={formData.adminEmail}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Idioma</label>
              <select name="language" value={formData.language} onChange={handleChange}>
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
              </select>
            </div>
            <div className="form-group">
              <label>Tema</label>
              <select name="theme" value={formData.theme} onChange={handleChange}>
                <option value="light">Claro</option>
                <option value="dark">Oscuro</option>
                <option value="auto">Automático</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="card">
          <div className="card-header">
            <h2>🔔 Notificaciones</h2>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <p className="setting-label">Notificaciones por Email</p>
              <p className="setting-desc">Recibe notificaciones de actividad importante</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleChange}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        {/* Security Settings */}
        <div className="card">
          <div className="card-header">
            <h2>🔒 Seguridad</h2>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <p className="setting-label">Modo de Mantenimiento</p>
              <p className="setting-desc">Desactiva el acceso de usuarios mientras se realiza mantenimiento</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                name="maintenanceMode"
                checked={formData.maintenanceMode}
                onChange={handleChange}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e0e0e0' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Cambiar Contraseña</h3>
            <div className="form-group">
              <label>Contraseña Actual</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="form-group">
              <label>Nueva Contraseña</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="form-group">
              <label>Confirmar Contraseña</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <button type="button" className="btn btn-secondary">
              Actualizar Contraseña
            </button>
          </div>
        </div>

        {/* Backup Settings */}
        <div className="card">
          <div className="card-header">
            <h2>💾 Copias de Seguridad</h2>
          </div>
          <div className="backup-info">
            <p><strong>Última copia:</strong> 2024-06-02 10:30:00</p>
            <p><strong>Tamaño:</strong> 245 MB</p>
            <p><strong>Frecuencia:</strong> Diaria</p>
          </div>
          <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
            <button type="button" className="btn btn-primary">
              Crear Copia Ahora
            </button>
            <button type="button" className="btn btn-secondary">
              Descargar Última
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="action-footer">
          <button type="submit" className="btn btn-primary btn-lg">
            <Save size={20} /> Guardar Configuración
          </button>
        </div>
      </form>
    </div>
  )
}
