const express = require('express')
const router = express.Router()

router.get('/shop/hot-list', (req, res) => {
  res.json({
    errno: 0,
    data: [
      {
        id: '1',
        name: '山姆会员商店1',
        imgUrl: 'http://localhost:5000/%E8%B6%85%E5%B8%82@2x.png',
        sales: 10000,
        expressLimit: 0,
        expressPrice: 5,
        slogan: 'VIP尊享满89元减4元运费券'
      },
      {
        id: '2',
        name: '山姆会员商店2',
        imgUrl: 'http://localhost:5000/%E8%B6%85%E5%B8%82@2x.png',
        sales: 2000,
        expressLimit: 0,
        expressPrice: 5,
        slogan: '联合利华洗护满10减五'
      },
      {
        id: '3',
        name: '山姆会员商店3',
        imgUrl: 'http://localhost:5000/%E8%B6%85%E5%B8%82@2x.png',
        sales: 3000,
        expressLimit: 0,
        expressPrice: 5,
        slogan: '联合利华洗护满10减五'
      },
    ],
    message: 'errno!==0时的错误信息'
  })
})
module.exports = router