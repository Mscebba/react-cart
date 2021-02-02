const Product = require('../models/product');
const Category = require('../models/category');

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

exports.getProductBySlug = async (req, res) => {
  const product = await Product.find({ slug: req.params.id });
  if (!product) return res.status(404).send("Id doesn't exists");
  res.send(product[0]);
};

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
