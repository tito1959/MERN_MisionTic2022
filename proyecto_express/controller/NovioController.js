const Novio = require('../model/Novio');

let response = {
    msg: '',
    exito: false
};

exports.create = (req, res) => {

    let novio = new Novio({
        novio_id: req.body.novio_id,
        nombre_novio: req.body.nombre_novio,
        edad: req.body.edad,
        estatura: req.body.estatura,
        color_ojos: req.body.colr_ojos,
        nacionalidad: req.body.nacionalidad,
        etina: req.body.etnia
    });

    novio.save((err) => {
        if (err) {
            console.log(err);
            response.exito = false;
            response.msg = 'Error al guardar Novio';
            res.json(response);
            return;
        }

        response.exito = true;

        response.msg = 'El Novio se guardó correctamente';
        res.json(response);
    });
};

exports.find = (req, res) => Novio.find((err, novios) => res.json(novios));

exports.findOne = (req, res) => {
    const id = { _id: req.params.id };

    Novio.findById(id, (err, novio) => { res.json(novio); });
};

exports.update = (req, res) => {

    let novio = ({
        novio_id: req.body.novio_id,
        nombre_novio: req.body.nombre_novio,
        edad: req.body.edad,
        estatura: req.body.estatura,
        color_ojos: req.body.colr_ojos,
        nacionalidad: req.body.nacionalidad,
        etina: req.body.etnia
    });

    Novio.findByIdAndUpdate(req.params.id, { $set: novio }, (err) => {
        if (err) {
            console.log(err);
            response.exito = false;
            response.msg = 'Error al guardar Novio';
            res.json(response);
            return;
        }

        response.exito = true;

        response.msg = 'El Novio se guardó correctamente';
        res.json(response);
    });
};

exports.remove = (req, res) => {

    Novio.findByIdAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            console.log(err);
            response.exito = false;
            response.msg = 'Error al eliminar Novio';
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = 'El Novio se elminó correctamente';
        res.json(response);
    });
};