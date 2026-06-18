import express from 'express';
import { gps } from "./controllers/gpsController";
import { status } from "./controllers/statusController";
import { helloWorld } from './controllers/helloController';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rotas
app.use('/', helloWorld)
app.use('/gps', gps);
app.use('/status',status);
//app.use('/api/users', userRoutes);
//app.use('/api/auth', authRoutes);

// Inicialização
app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}/`);
});