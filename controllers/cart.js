const Cart = require('../models/cart');

exports.getCarts = async (req, res) => {
  const carts = await Cart.find().populate();
  return res.status(200).json(carts);
};

exports.postItemToCart = async (req, res) => {
  const { _id, imgUrl, title, price, size, slug } = req.body;

  const existingProduct = await Cart.findOne({
    products: { $elemMatch: { prodId: _id, size } },
  });

  if (existingProduct) {
    try {
      await Cart.updateOne(
        {
          products: { $elemMatch: { prodId: _id, size } },
        },
        {
          $inc: { 'products.$.qty': 1, total: price },
        },
        {
          upsert: true,
          new: true,
        }
      );

      return res.status(201).send(req.body);
    } catch (error) {
      return res.status(409).json({ message: error.message });
    }
  } else {
    try {
      await Cart.updateOne(
        {},
        {
          $push: {
            products: { prodId: _id, name: title, imgUrl, price, size, slug },
          },
          $inc: { total: price },
        },
        {
          upsert: true,
        }
      );
      return res.status(201).send(req.body);
    } catch (error) {
      return res.status(409).json({ message: error.message });
    }
  }
};

exports.removeItemFromCart = async (req, res) => {
  const { _id } = req.body;
  try {
    await Cart.updateOne(
      {
        products: { $elemMatch: { _id, qty: { $gt: 1 } } },
      },
      {
        $inc: { 'products.$.qty': -1 },
      }
    );
    return res.json(_id);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteItemFromCart = async (req, res) => {
  const { _id } = req.body;

  try {
    await Cart.updateOne(
      {},
      {
        $pull: { products: { _id } },
      }
    );
    return res.json(_id);
  } catch (error) {
    console.log(error);
  }
};
