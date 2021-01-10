const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');
const { productFieldValidations } = require('../middlewares/validator');

router.get('/', productController.getProducts);

router.get('/:id', productController.getProductById);

router.post('/', productFieldValidations, productController.postNewProduct);

router.put(
  '/:id',
  productFieldValidations,
  productController.putProductModification
);

router.delete('/:id', productController.deleteProductById);

module.exports = router;
