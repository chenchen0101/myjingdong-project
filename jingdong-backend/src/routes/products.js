const express = require("express")
const router = express.Router()
router.get('/shop/shop-content/:id/products', (req, res) => {
  const { params } = req;
  const { id } = params;
  const productsdata = [
    {
      id: '1',
      name: '番茄250g',
      imgUrl: 'http://localhost:5000/%E6%8F%90%E5%AD%90.jpg',
      sales: 10,
      price: 33.6,
      oldPrice: 39.6

    }
  ]
  let products = productsdata.find((item) => item.id === id)
  res.json({
    errno: 0,
    data: products,
    message: 'errno!==0时的错误信息'
  })
})
module.exports = router