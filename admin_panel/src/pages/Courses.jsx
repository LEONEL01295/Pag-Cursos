import { useState, useEffect } from 'react'
import { Plus, Trash2, Edit2, Search } from 'lucide-react'
import { coursesAPI } from '../services/api'
import '../styles/tables.css'

export default function Courses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: '',
    students: 0,
  })

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      setLoading(true)
      const data = await coursesAPI.getAll()
      setCourses(data.data || getDefaultCourses())
    } catch (err) {
      console.error('Error fetching courses:', err)
      setCourses(getDefaultCourses())
    } finally {
      setLoading(false)
    }
  }

  const getDefaultCourses = () => [
    { id: 1, title: 'Introducción a React', description: 'Aprende React desde cero', instructor: 'Juan Pérez', students: 245, status: 'activo' },
    { id: 2, title: 'JavaScript Avanzado', description: 'Conceptos avanzados de JS', instructor: 'María García', students: 189, status: 'activo' },
    { id: 3, title: 'Diseño UI/UX', description: 'Principios de diseño moderno', instructor: 'Carlos López', students: 156, status: 'activo' },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        await coursesAPI.update(editingId, formData)
      } else {
        await coursesAPI.create(formData)
      }
      fetchCourses()
      resetForm()
    } catch (err) {
      console.error('Error saving course:', err)
    }
  }

  const handleDelete = async (id) => {
    if (confirm('¿Estás seguro de que deseas eliminar este curso?')) {
      try {
        await coursesAPI.delete(id)
        fetchCourses()
      } catch (err) {
        console.error('Error deleting course:', err)
      }
    }
  }

  const handleEdit = (course) => {
    setEditingId(course.id)
    setFormData(course)
    setShowForm(true)
  }

  const resetForm = () => {
    setShowForm(false)
    setEditingId(null)
    setFormData({ title: '', description: '', instructor: '', students: 0 })
  }

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="table-container">
      <div className="card">
        <div className="card-header">
          <h2>Gestión de Cursos</h2>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            <Plus size={18} /> Nuevo Curso
          </button>
        </div>

        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Buscar por título o instructor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📚</div>
            <div className="empty-state-title">No hay cursos</div>
            <div className="empty-state-text">Crea tu primer curso haciendo clic en "Nuevo Curso"</div>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Instructor</th>
                <th>Estudiantes</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map(course => (
                <tr key={course.id}>
                  <td>
                    <strong>{course.title}</strong>
                    <p style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
                      {course.description}
                    </p>
                  </td>
                  <td>{course.instructor}</td>
                  <td>{course.students}</td>
                  <td>
                    <span className="badge badge-success">Activo</span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => handleEdit(course)}
                        title="Editar"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(course.id)}
                        title="Eliminar"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={resetForm}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingId ? 'Editar Curso' : 'Nuevo Curso'}</h3>
              <button className="close-btn" onClick={resetForm}>✕</button>
            </div>
            <form onSubmit={handleSubmit} className="modal-body">
              <div className="form-group">
                <label>Título del Curso</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Descripción</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label>Instructor</label>
                <input
                  type="text"
                  value={formData.instructor}
                  onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                  required
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingId ? 'Guardar Cambios' : 'Crear Curso'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
