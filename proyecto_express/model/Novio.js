const { Schema, model } = require('mongoose');

const NoviosSchema = new Schema({
    novio_id: { type: String, required: true, max: 60 },
    nombre_novio: { type: String, required: true, max: 40 },
    edad: { type: Number, required: true, max: 100 },
    estatura: { type: Number, required: true, max: 200 },
    color_ojos: { type: String, required: false, max: 70 },
    nacionalidad: { type: String, required: false, max: 150 },
    etina: { type: String, required: false, max: 150 }
});

module.exports = model('novio', NoviosSchema);