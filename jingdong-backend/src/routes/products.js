const express = require("express");
const { type } = require("express/lib/response");
const router = express.Router()
router.get('/shop/shop-content/:id/products', (req, res) => {
  const { params } = req;
  const { id } = params;
  const productsdata = [
    {
      id: '1',
      name: '番茄250g番茄250g番茄250g番茄250g番茄250gv番茄250g',
      imgUrl: 'http://192.168.1.8:5000/%E6%8F%90%E5%AD%90.jpg',
      sales: 10,
      price: 33.6,
      oldPrice: 39.6

    },
    {
      id: '2',
      name: '提子250g',
      imgUrl: 'http://192.168.1.8:5000/%E6%8F%90%E5%AD%90.jpg',
      sales: 10,
      price: 33.6,
      oldPrice: 39.6,
      tab: "all"
    },
    {
      id: '3',
      name: '香蕉250g',
      imgUrl: 'http://192.168.1.8:5000/%E6%8F%90%E5%AD%90.jpg',
      sales: 10,
      price: 33.6,
      oldPrice: 39.6,
      tab: "all"

    },
    {
      id: '4',
      name: '大肉',
      imgUrl: 'http://192.168.1.8:5000/%E6%8F%90%E5%AD%90.jpg',
      sales: 10,
      price: 33.6,
      oldPrice: 39.6,
      tab: "all"

    },
    {
      id: '5',
      name: '鸡蛋',
      imgUrl: 'http://192.168.1.8:5000/%E6%8F%90%E5%AD%90.jpg',
      sales: 10,
      price: 33.6,
      oldPrice: 39.6,
      tab: "seckill"

    },
    {
      id: '6',
      name: '芒果250g',
      imgUrl: 'http://192.168.1.8:5000/%E6%8F%90%E5%AD%90.jpg',
      sales: 10,
      price: 33.6,
      oldPrice: 39.6,
      tab: "fruit"

    },
  ]
  // let products = productsdata.find((item) => item.id === id)
  res.json({
    errno: 0,
    data: productsdata,
    message: 'errno!==0时的错误信息'
  })
})
module.exports = router