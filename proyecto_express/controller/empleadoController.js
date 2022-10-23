const Empleado = require('../model/Empleado');

let response = {
    msg: '',
    exito: false
};

exports.create = (req, res) => {

    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    });

    empleado.save((err) => {
        if (err) {
            console.log(err);
            response.exito = false;
            response.msg = 'Error al guardar empleado';
            res.json(response);
            return;
        }

        response.exito = true;

        response.msg = 'El empleado se guardó correctamente';
        res.json(response);
    });
};

exports.find = (req, res) => Empleado.find((err, empleados) => res.json(empleados));

exports.findOne = (req, res) => {
    const id = { _id: req.params.id };

    Empleado.findById(id, (err, empleado) => { res.json(empleado); });
};

exports.update = (req, res) => {

    let empleado = ({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    });

    Empleado.findByIdAndUpdate(req.params.id, { $set: empleado }, (err) => {
        if (err) {
            console.log(err);
            response.exito = false;
            response.msg = 'Error al guardar empleado';
            res.json(response);
            return;
        }

        response.exito = true;

        response.msg = 'El empleado se guardó correctamente';
        res.json(response);
    });
};

exports.remove = (req, res) => {

    Empleado.findByIdAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            console.log(err);
            response.exito = false;
            response.msg = 'Error al eliminar empleado';
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = 'El empleado se elminó correctamente';
        res.json(response);
    });
};