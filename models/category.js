const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 50,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
});

const Category = mongoose.model('category', categorySchema);

module.exports = Category;
