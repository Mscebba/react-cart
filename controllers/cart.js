const Cart = require('../models/cart');

exports.getCarts = async (req, res) => {
  const carts = await Cart.find();
  res.send(carts);
};

exports.postItemToCart = async (req, res) => {
  const { prodId, name, price } = req.body;

  existingProduct = await Cart.findOne({
    'products.prodId': prodId,
  });

  if (existingProduct) {
    try {
      await Cart.updateOne(
        {
          'products.prodId': prodId,
        },
        {
          $inc: { 'products.$.qty': 1, total: price },
        }
      );
      return res.status(200).send('CART UPDATED');
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      await Cart.updateOne(
        {},
        {
          $push: { products: { prodId, name, price } },
          $inc: { total: price },
        }
      );
      return res.status(200).send('CART UPDATED');
    } catch (error) {
      console.log(error);
    }
  }
};

exports.removeItemFromCart = async (req, res) => {
  const { prodId, price } = req.body;

  try {
    await Cart.updateOne(
      {
        products: { $elemMatch: { prodId, qty: { $gt: 1 } } },
      },
      {
        $inc: { 'products.$.qty': -1, total: -price },
      }
    );
    return res.status(200).send('CART UPDATED');
  } catch (error) {
    console.log(error);
  }
};

exports.deleteItemFromCart = async (req, res) => {
  const { prodId, price } = req.body;

  try {
    await Cart.updateOne(
      {},
      {
        $pull: { products: { prodId } },
      }
    );
    return res.status(200).send('CART UPDATED');
  } catch (error) {
    console.log(error);
  }
};

// exports.deleteCartById = async (req, res) => {
//   const cart = await Cart.findByIdAndDelete(req.params.id);
//   if (!cart) {
//     return res.status(404).send(`El id ${req.params.id} no existe`);
//   }
//   res.status(200);
// };
