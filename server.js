const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { connection } = require('./database');

const user = require('./routes/user');
const auth = require('./routes/auth');
const category = require('./routes/category');
const products = require('./routes/products');
const cart = require('./routes/cart');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/auth/', auth);
app.use('/users/', user);
app.use('/categories/', category);
app.use('/products/', products);
app.use('/carts/', cart);

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

connection();
app.listen(port, (error) => {
  if (error) throw error;
  console.log(`🚀 Server ready at Port: ${port}`);
});
