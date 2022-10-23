const router = require('express').Router();
const usuarioController = require('../controller/UsuarioController');

router.post('/login', usuarioController.login);

module.exports = router;

