// index.js

import express from 'express';
import { authentication } from './middlewares/authentication.js';
import productRoutes from './routes/product.routes.js';
import authRoutes from './routes/auth.routes.js';
import { envs } from './config/envs.js';

const { PORT } = envs;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Carpeta raiz' });
});

// Rutas de productos
app.use('/api/product', authentication, productRoutes);

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Manejo de errores 404
app.use((req, res, next) => {
    res.status(404).json({ message: '404 - Recurso inexistente' });
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
