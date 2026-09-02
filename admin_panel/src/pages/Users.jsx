import { useState, useEffect } from 'react'
import { Plus, Trash2, Edit2, Search } from 'lucide-react'
import { usersAPI } from '../services/api'
import '../styles/tables.css'

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'student',
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const data = await usersAPI.getAll()
      setUsers(data.data || getDefaultUsers())
    } catch (err) {
      console.error('Error fetching users:', err)
      setUsers(getDefaultUsers())
    } finally {
      setLoading(false)
    }
  }

  const getDefaultUsers = () => [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'student', joined: '2024-01-15' },
    { id: 2, name: 'María García', email: 'maria@example.com', role: 'instructor', joined: '2024-01-20' },
    { id: 3, name: 'Carlos López', email: 'carlos@example.com', role: 'student', joined: '2024-02-01' },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        await usersAPI.update(editingId, formData)
      } else {
        await usersAPI.create(formData)
      }
      fetchUsers()
      resetForm()
    } catch (err) {
      console.error('Error saving user:', err)
    }
  }

  const handleDelete = async (id) => {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      try {
        await usersAPI.delete(id)
        fetchUsers()
      } catch (err) {
        console.error('Error deleting user:', err)
      }
    }
  }

  const handleEdit = (user) => {
    setEditingId(user.id)
    setFormData(user)
    setShowForm(true)
  }

  const resetForm = () => {
    setShowForm(false)
    setEditingId(null)
    setFormData({ name: '', email: '', role: 'student' })
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="table-container">
      <div className="card">
        <div className="card-header">
          <h2>Gestión de Usuarios</h2>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            <Plus size={18} /> Nuevo Usuario
          </button>
        </div>

        {/* Search */}
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Buscar por nombre o email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">👥</div>
            <div className="empty-state-title">No hay usuarios</div>
            <div className="empty-state-text">Crea tu primer usuario haciendo clic en "Nuevo Usuario"</div>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Fecha de Registro</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>
                    <div className="user-cell">
                      <div className="user-avatar">{user.name.charAt(0)}</div>
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`badge badge-${user.role === 'instructor' ? 'success' : 'primary'}`}>
                      {user.role === 'instructor' ? 'Instructor' : 'Estudiante'}
                    </span>
                  </td>
                  <td>{new Date(user.joined).toLocaleDateString('es-ES')}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => handleEdit(user)}
                        title="Editar"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(user.id)}
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

      {/* Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={resetForm}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingId ? 'Editar Usuario' : 'Nuevo Usuario'}</h3>
              <button className="close-btn" onClick={resetForm}>✕</button>
            </div>
            <form onSubmit={handleSubmit} className="modal-body">
              <div className="form-group">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Rol</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  <option value="student">Estudiante</option>
                  <option value="instructor">Instructor</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingId ? 'Guardar Cambios' : 'Crear Usuario'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
