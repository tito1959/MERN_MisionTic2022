const Usuario = require('../model/Usuario');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {

    let hashedPass = crypto.createHash('sha512').update(req.body.pass).digest('hex');

    Usuario.findOne({
        usuario: req.body.usuario,
        pass: hashedPass

    }, (err, usuario) => {

        let response = {
            token: null
        };

        if (usuario != null) {
            response.token = jwt.sign({
                id: usuario._id,
                usuario: usuario.usuario
            }, '__recret__');
        }

        res.json(response);
    });
};