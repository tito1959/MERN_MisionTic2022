const { Router } = require('express');
const router = Router();

const empleadoController = require('../controller/empleadoController');

router.post('/', empleadoController.create);
router.get('/', empleadoController.find);
router.get('/:id', empleadoController.findOne);
router.put('/:id', empleadoController.update);
router.delete('/:id', empleadoController.remove);

module.exports = router;