const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    // get: (title) => title.replaceAll(' ', '-'),
    lowercase: true,
    trim: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
  },
});

productSchema.pre('validate', function () {
  this.slug = this.title.replace(/ /g, '-').toLowerCase();
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
