const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart');

router.get('/', cartController.getCarts);

router.post('/addtocart', cartController.postItemToCart);

router.post('/removefromcart', cartController.removeItemFromCart);

router.post('/deleteitemcart', cartController.deleteItemFromCart);

module.exports = router;
