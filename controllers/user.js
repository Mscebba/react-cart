const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('User not found');
  res.send(user);
};

exports.postNewUser = async ({ body: { username, email, password } }, res) => {
  let user = await User.findOne({ email });
  if (user)
    return res
      .status(400)
      .send('El email ya pertenece a un usuario registrado');

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  user = new User({
    username,
    email,
    password: hashPassword,
  });
  const result = await user.save();
  const jwtToken = user.generateJWT();
  res.status(201).header('Authorization', jwtToken).send({
    _id: user._id,
    username: user.username,
    email: user.email,
  });
};

exports.putUserModification = async (
  { body: { username, email, password }, params: { id } },
  res
) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const user = await User.findByIdAndUpdate(
    id,
    {
      username,
      email,
      password: hashPassword,
    },
    {
      new: true,
      useFindAndModify: false,
    }
  );
  if (!user) return res.send(404).send("Id doesn't exists");
  res.status(200).send({
    _id: user._id,
    username: user.username,
    email: user.email,
  });
};

exports.deleteUserById = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).send(`El id ${req.params.id} no existe`);
  }
  res.status(200).send('El usuario ha sido eliminado');
};
