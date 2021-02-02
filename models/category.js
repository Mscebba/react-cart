const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 50,
    },

    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model('categories', categorySchema);

module.exports = Category;
