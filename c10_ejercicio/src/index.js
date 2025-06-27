// +--------------------------+
// | Servidor Web con Express |
// +--------------------------+

import express from "express";
import path from "path";
import url from "url";

const PORT = 3000; // Puerto de escucha del servidor

const app = express(); // Crear una instancia de Express

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "public");

// Rutas
app.get("/", (req, res) => {
    res.status(200);
    res.sendFile(path.join(rootDir, "index.html"));
});

app.get("/api", (req, res) => {
    res.status(200);
    res.sendFile(path.join(rootDir, "data.json"));
});

// Listener
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
