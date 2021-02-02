const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const { userFieldValidations } = require('../middlewares/validator');

router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);

router.post('/', userFieldValidations, userController.postNewUser);

router.put('/:id', userFieldValidations, userController.putUserModification);

router.delete('/:id', userController.deleteUserById);

module.exports = router;
