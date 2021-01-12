const Product = require('../models/product');
const Category = require('../models/category');

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).send('El id no existe');
  res.send(product);
};

// Post Datos embebidos
exports.postNewProduct = async (
  { body: { title, description, imgUrl, price, categoryId } },
  res
) => {
  const category = await Category.findById({ _id: categoryId });
  if (!category) return send.status(400).send('Category not found');
  const product = new Product({
    category,
    title,
    description,
    imgUrl,
    price,
    categoryId,
  });
  const result = await product.save();
  category.products.push(result.id);
  await category.save();
  res.status(201).send(result);
};

// // Post Datos Normalizado
// exports.postNewProduct = async (req, res) => {
//   const product = new Product({
//     category: req.body.category,
//     model: req.body.model,
//     sold: req.body.sold,
//     price: req.body.price,
//     year: req.body.year,
//     extras: req.body.extras,
//   });
//   const result = await product.save();
//   res.status(201).send(result);
// };

exports.putProductModification = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      category: req.body.category,
      model: req.body.model,
      sold: req.body.sold,
      price: req.body.price,
      year: req.body.year,
      extras: req.body.extras,
    },
    {
      new: true,
    }
  );
  if (!product) return res.send(404).send('El id no existe');
  res.status(204).send();
};

exports.deleteProductById = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).send(`El id ${req.params.id} no existe`);
  }
  res.status(200).send('El auto fue eliminado');
};
