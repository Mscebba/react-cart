const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.postLogin = async ({ body: { email, password } }, res) => {
  let user = await User.findOne({ email });

  if (!user) return res.status(400).send('Invalid credentials');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid credentials');

  const jwtToken = user.generateJWT();

  res.status(201).header('Authorization', jwtToken).send({
    _id: user._id,
    email: user.email,
  });
};
