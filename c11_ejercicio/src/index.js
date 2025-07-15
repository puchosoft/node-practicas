import express from 'express';
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use(cors());

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    res.status(200).json({ productId });
});

app.get('/user/', (req, res) => {
    const name = req.query.name || 'John';
    const lastname = req.query.lastname || 'Doe';
    res.status(200).json({ name, lastname });
});

app.get('/ofertas/:max', (req, res) => {
    const max = parseInt(req.params.max);
    const ofertas = [
        { product: 'jabon', price: 200 },
        { product: 'papel', price: 113 },
        { product: 'pegamento', price: 150 },
        { product: 'broches', price: 300 },
        { product: 'tachuelas', price: 400 }
    ].filter(oferta => oferta.price <= max);

    res.status(200).json({ ofertas });
});

app.get('/categoria/:id', (req, res) => {
    const categoryId = req.params.id;
    const description = req.query.description || 'No description provided';
    const department = req.query.department || 'No department specified';
    res.status(200).json({ categoryId, description, department });
});

// Manejo de errores 404
app.use((req, res, next) => {
    res.status(404).sendFile('public/404.html', { root: '.' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
