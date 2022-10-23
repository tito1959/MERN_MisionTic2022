const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    usuario: { type: String, required: true, max: 60 },
    pass: { type: String, required: true, max: 128 },
});

module.exports = model('usuario', UsuarioSchema);