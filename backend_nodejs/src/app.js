import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok',
    message: '✅ API CourseHub Free funcionando',
    timestamp: new Date().toISOString()
  });
});

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    name: 'CourseHub Free API',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      health: 'GET /health',
      auth: 'POST /api/auth/login',
      courses: 'GET /api/courses',
      docs: 'https://coursehub-docs.example.com'
    }
  });
});

// Rutas de API (se agregarán después)
app.use('/api', (req, res) => {
  res.status(501).json({ 
    error: 'Endpoint no implementado',
    path: req.path,
    method: req.method 
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(err.status || 500).json({ 
    error: err.message || 'Error interno del servidor'
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Ruta no encontrada',
    path: req.path
  });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════╗
║  🚀 CourseHub Free Backend            ║
║  Servidor corriendo en puerto ${PORT}    ║
║  ${new Date().toLocaleString()}
╚═══════════════════════════════════════╝
  `);
  console.log('Endpoints disponibles:');
  console.log('  GET  http://localhost:' + PORT + '/');
  console.log('  GET  http://localhost:' + PORT + '/health');
  console.log('  POST http://localhost:' + PORT + '/api/auth/login');
});

export default app;
