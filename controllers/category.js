const Category = require('../models/category');

exports.getCategories = async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
};

exports.getCategoryById = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).send('El id no existe');
  res.send(category);
};

exports.postNewCategory = async ({ body: { name } }, res) => {
  let category = await Category.findOne({ name });
  if (category) return res.status(400).send('Category name already exists');

  category = new Category({
    name,
  });
  const result = await category.save();
  res.status(201).send(result);
};

exports.putCategoryModification = async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    {
      new: true,
    }
  );
  if (!category) return res.send(404).send('El id no existe');
  res.status(204).send();
};

exports.deleteCategoryById = async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    return res.status(404).send(`El id ${req.params.id} no existe`);
  }
  res.status(200).send('La compania fue eliminada');
};
