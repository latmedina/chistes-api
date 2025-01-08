const mongoose = require('mongoose');

// Definimos el esquema para el modelo de chistes
const jokeSchema = new mongoose.Schema({
    text: { type: String, required: true },
    author: { type: String, default: "Se perdió en el Ávila como Led" },
    rating: { type: Number, required: true },
    category: { type: String, required: true, enum: ['Dad joke', 'Humor Negro', 'Chistoso', 'Malo'] }
});

// Creamos el modelo
const JokeModel = mongoose.model('Joke', jokeSchema);

module.exports = JokeModel; // Exportamos el modelo para usarlo en las rutas
