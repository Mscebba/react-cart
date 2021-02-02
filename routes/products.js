const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');
const { productFieldValidations } = require('../middlewares/validator');

router.get('/', productController.getProducts);

router.get('/:id', productController.getProductBySlug);

router.post('/', productFieldValidations, productController.postNewProduct);

module.exports = router;
