import { useState } from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import '../styles/dashboard.css'

export default function Reports() {
  const enrollmentData = [
    { month: 'Ene', value: 400 },
    { month: 'Feb', value: 520 },
    { month: 'Mar', value: 680 },
    { month: 'Abr', value: 890 },
    { month: 'May', value: 1200 },
    { month: 'Jun', value: 1450 },
  ]

  const performanceData = [
    { course: 'React', completion: 85 },
    { course: 'JavaScript', completion: 78 },
    { course: 'Diseño', completion: 92 },
    { course: 'Marketing', completion: 68 },
    { course: 'Negocios', completion: 75 },
  ]

  return (
    <div className="dashboard">
      <div className="grid grid-4">
        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
            📊
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Inscripciones Totales</p>
            <p className="kpi-value">12,458</p>
            <p className="kpi-change positive">+15% vs mes anterior</p>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
            ✅
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Tasa de Finalización</p>
            <p className="kpi-value">81%</p>
            <p className="kpi-change positive">+3% vs mes anterior</p>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
            ⭐
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Puntuación Promedio</p>
            <p className="kpi-value">4.7/5</p>
            <p className="kpi-change positive">+0.2 vs mes anterior</p>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
            📉
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Abandono</p>
            <p className="kpi-value">9%</p>
            <p className="kpi-change negative">-2% vs mes anterior</p>
          </div>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-header">
            <h2>Tendencia de Inscripciones</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#10b981" 
                dot={{ fill: '#10b981', r: 5 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Desempeño por Curso</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="course" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completion" fill="#667eea" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
