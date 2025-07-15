// index.js
import express from 'express';
import productRoutes from './routes/product.routes.js';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Carpeta raiz' });
});

// Rutas de productos
app.use('/api/product', productRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: '404 - Recurso inexistente' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
