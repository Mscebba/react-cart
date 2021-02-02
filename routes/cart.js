const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart');

// Get all carts
router.get('/', cartController.getCarts);

// Add one item to cart
router.post('/addtocart', cartController.postItemToCart);

// Remove one item QTY from cart if QTY > 1
router.delete('/removefromcart', cartController.removeItemFromCart);

// Remove the entire item from cart
router.delete('/deleteitemcart', cartController.deleteItemFromCart);

module.exports = router;
