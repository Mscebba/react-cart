const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema(
  {
    prodId: String,
    name: String,
    price: Number,
    qty: {
      type: Number,
      default: 1,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

const cartSchema = mongoose.Schema(
  {
    total: {
      type: Number,
    },
    products: [itemsSchema],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;
