// +--------------------------+
// | Servidor Web con Express |
// +--------------------------+

import express from 'express';

const PORT = 3000; // Puerto de escucha del servidor

const app = express(); // Crear una instancia de Express

app.get('/ping', (req, res) => { // Definir una ruta GET para '/ping'
    res.send('/pong');
});


app.listen(PORT, () => { // Iniciar el servidor y escuchar en el puerto especificado
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
