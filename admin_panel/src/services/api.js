import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

// Interceptor para agregar token
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

// Interceptor para manejo de errores
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// ============ USUARIOS ============
export const usersAPI = {
  getAll: () => api.get('/api/users'),
  getById: (id) => api.get(`/api/users/${id}`),
  create: (data) => api.post('/api/users', data),
  update: (id, data) => api.put(`/api/users/${id}`, data),
  delete: (id) => api.delete(`/api/users/${id}`),
}

// ============ CURSOS ============
export const coursesAPI = {
  getAll: () => api.get('/api/courses'),
  getById: (id) => api.get(`/api/courses/${id}`),
  create: (data) => api.post('/api/courses', data),
  update: (id, data) => api.put(`/api/courses/${id}`, data),
  delete: (id) => api.delete(`/api/courses/${id}`),
}

// ============ REPORTES ============
export const reportsAPI = {
  getDashboard: () => api.get('/api/reports/dashboard'),
  getUserStats: () => api.get('/api/reports/users'),
  getCourseStats: () => api.get('/api/reports/courses'),
  getEnrollmentStats: () => api.get('/api/reports/enrollments'),
}

// ============ AUTENTICACIÓN ============
export const authAPI = {
  login: (email, password) => api.post('/api/auth/login', { email, password }),
  logout: () => {
    localStorage.removeItem('authToken')
  },
  me: () => api.get('/api/auth/me'),
}

// ============ GENERAL ============
export const healthCheck = () => api.get('/health')

export default api
