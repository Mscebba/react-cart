const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      minlength: 9,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: 'User',
    },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'carts' },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    { _id: this._id, name: this.name, isAdmin: this.isAdmin, role: this.role },
    process.env.SECRET_KEY_JWT_TOKEN
  );
};

const User = mongoose.model('users', userSchema);

module.exports = User;
