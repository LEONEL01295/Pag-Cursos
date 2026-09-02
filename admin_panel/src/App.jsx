import { useState, useEffect } from 'react'
import { Menu, X, LogOut, Bell, Settings as SettingsIcon } from "lucide-react"
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Courses from './pages/Courses'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import './App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [user, setUser] = useState({ name: 'Admin', email: 'admin@coursehub.com' })

  const pages = {
    dashboard: <Dashboard />,
    users: <Users />,
    courses: <Courses />,
    reports: <Reports />,
    settings: <Settings />,
  }

  const menuItems = [
    { id: 'dashboard', label: '📊 Dashboard', icon: '📊' },
    { id: 'users', label: '👥 Usuarios', icon: '👥' },
    { id: 'courses', label: '📚 Cursos', icon: '📚' },
    { id: 'reports', label: '📈 Reportes', icon: '📈' },
    { id: 'settings', label: '⚙️ Configuración', icon: '⚙️' },
  ]

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">📚</span>
            {sidebarOpen && <span className="logo-text">CourseHub</span>}
          </div>
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => setCurrentPage(item.id)}
              title={item.label}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          {sidebarOpen && (
            <div className="user-profile">
              <div className="user-avatar">
                {user.name.charAt(0)}
              </div>
              <div className="user-info">
                <p className="user-name">{user.name}</p>
                <p className="user-email">{user.email}</p>
              </div>
            </div>
          )}
          <button className="logout-btn" title="Cerrar sesión">
            <LogOut size={20} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <header className="top-bar">
          <button 
            className="hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={24} />
          </button>

          <div className="top-bar-title">
            <h1>{menuItems.find(m => m.id === currentPage)?.label}</h1>
          </div>

          <div className="top-bar-actions">
            <button className="icon-btn" title="Notificaciones">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <button className="icon-btn" title="Configuración">
              <SettingsIcon size={20} />
            </button>
            <div className="user-menu">
              <div className="user-avatar-small">
                {user.name.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          {pages[currentPage]}
        </main>
      </div>
    </div>
  )
}

