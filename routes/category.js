const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category');
const { categoryFieldValidations } = require('../middlewares/validator');

router.get('/', categoryController.getCategories);

router.get('/:id', categoryController.getCategoryById);

router.post('/', categoryFieldValidations, categoryController.postNewCategory);

router.put(
  '/:id',
  categoryFieldValidations,
  categoryController.putCategoryModification
);

router.delete('/:id', categoryController.deleteCategoryById);

module.exports = router;
