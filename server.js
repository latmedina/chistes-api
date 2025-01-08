const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const jokeRoutes = require('./routes/jokes');

// Middleware para parsear JSON
app.use(express.json());

// Ruta para la raíz (opcional)
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de Chistes!');
});

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/jokesDB')
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Definimos las rutas
jokeRoutes(app);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
