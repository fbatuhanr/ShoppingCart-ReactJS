const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.get);
router.post('/', userController.create);

router.put('/:id', userController.update);
router.delete('/:id', userController.remove);

module.exports = router;