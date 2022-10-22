const { Schema, model } = require('mongoose');

const NoviosSchema = new Schema({
    novio_id: { type: String, required: true, max: 60 },
    apellido_p: { type: String, required: true, max: 40 },
    apellido_m: { type: String, required: true, max: 40 },
    telefono: { type: String, required: true, max: 15 },
    mail: { type: String, required: false, max: 70 },
    direccion: { type: String, required: false, max: 150 },
})

module.exports = model("novio", NoviosSchema);