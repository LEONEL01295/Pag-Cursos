import { useState, useEffect } from 'react'
import { Users, BookOpen, TrendingUp, Activity } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { reportsAPI } from '../services/api'
import '../styles/dashboard.css'

export default function Dashboard() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const data = await reportsAPI.getDashboard()
      setStats(data.data || getDefaultStats())
      setError(null)
    } catch (err) {
      console.error('Error fetching dashboard data:', err)
      setStats(getDefaultStats())
      setError(null)
    } finally {
      setLoading(false)
    }
  }

  const getDefaultStats = () => ({
    totalUsers: 1234,
    totalCourses: 45,
    activeEnrollments: 3890,
    completionRate: 78,
    usersTrend: [
      { name: 'Ene', value: 400 },
      { name: 'Feb', value: 450 },
      { name: 'Mar', value: 520 },
      { name: 'Abr', value: 680 },
      { name: 'May', value: 890 },
      { name: 'Jun', value: 1234 },
    ],
    coursesTrend: [
      { name: 'Programación', value: 340 },
      { name: 'Diseño', value: 280 },
      { name: 'Marketing', value: 220 },
      { name: 'Negocios', value: 180 },
      { name: 'Otros', value: 200 },
    ],
  })

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="dashboard">
      {/* KPI Cards */}
      <div className="grid grid-4">
        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: 'rgba(102, 126, 234, 0.1)', color: '#667eea' }}>
            <Users size={24} />
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Usuarios Totales</p>
            <p className="kpi-value">{stats.totalUsers.toLocaleString()}</p>
            <p className="kpi-change positive">+12% este mes</p>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
            <BookOpen size={24} />
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Cursos Activos</p>
            <p className="kpi-value">{stats.totalCourses}</p>
            <p className="kpi-change positive">+3 este mes</p>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
            <TrendingUp size={24} />
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Inscripciones</p>
            <p className="kpi-value">{stats.activeEnrollments.toLocaleString()}</p>
            <p className="kpi-change positive">+8% este mes</p>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
            <Activity size={24} />
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Tasa Finalización</p>
            <p className="kpi-value">{stats.completionRate}%</p>
            <p className="kpi-change positive">+5% este mes</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-2">
        <div className="card">
          <div className="card-header">
            <h2>Crecimiento de Usuarios</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats.usersTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#667eea" 
                dot={{ fill: '#667eea', r: 5 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Distribución de Cursos</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.coursesTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#764ba2" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="card-header">
          <h2>Actividad Reciente</h2>
        </div>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon" style={{ background: 'rgba(102, 126, 234, 0.1)', color: '#667eea' }}>
              <Users size={18} />
            </div>
            <div className="activity-content">
              <p className="activity-title">Nuevo usuario registrado</p>
              <p className="activity-desc">Juan Pérez se registró en la plataforma</p>
            </div>
            <p className="activity-time">Hace 2 horas</p>
          </div>

          <div className="activity-item">
            <div className="activity-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <BookOpen size={18} />
            </div>
            <div className="activity-content">
              <p className="activity-title">Nuevo curso creado</p>
              <p className="activity-desc">Curso "Introducción a React" fue publicado</p>
            </div>
            <p className="activity-time">Hace 4 horas</p>
          </div>

          <div className="activity-item">
            <div className="activity-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
              <TrendingUp size={18} />
            </div>
            <div className="activity-content">
              <p className="activity-title">Estudiante completó curso</p>
              <p className="activity-desc">María García completó "Fundamentos de JS"</p>
            </div>
            <p className="activity-time">Hace 6 horas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
