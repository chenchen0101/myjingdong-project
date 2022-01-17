const express = require('express');
const path = require('path');
const cors = require('cors')
const hotlistRouter = require('./src/routes/hot-list')
const shopcontent = require('./src/routes/shop-content')
const products = require('./src/routes/products')
const hostname = 'localhost';
const port = 5000;

const app = express();
app.use(cors())
app.use(express.static(path.resolve(__dirname, './src/assets')))
app.get('/', (req, res) => {
  res.end('hello')
})
app.use('/api', hotlistRouter);
app.use('/api', shopcontent)
app.use('/api', products)
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})