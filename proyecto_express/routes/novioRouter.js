const { Router } = require('express');
const router = Router();

const novioController = require('../controller/NovioController');

router.post('/', novioController.create);
router.get('/', novioController.find);
router.get('/:id', novioController.findOne);
router.put('/:id', novioController.update);
router.delete('/:id', novioController.remove);

module.exports = router;