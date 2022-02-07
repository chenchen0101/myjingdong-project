import { createStore } from "vuex";
export const store = createStore({
  state: {
    cartList: {
      //第一层级是商铺ID
      // shopId: {
      //   //第二层是商品ID
      //   //第二层内容是商品内容及购物数量
      //   productId: {
      //     id: '1',
      //     name: '番茄250g番茄250g番茄250g番茄250g番茄250gv番茄250g',
      //     imgUrl: 'http://localhost:5000/%E6%8F%90%E5%AD%90.jpg',
      //     sales: 10,
      //     price: 33.6,
      //     oldPrice: 39.6,
      //     count: 2
      //   },
      //   222: {
      //     id: '1',
      //     name: '番茄250g番茄250g番茄250g番茄250g番茄250gv番茄250g',
      //     imgUrl: 'http://localhost:5000/%E6%8F%90%E5%AD%90.jpg',
      //     sales: 10,
      //     price: 33.6,
      //     oldPrice: 39.6,
      //     count: 2
      //   }
      // }
    }
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = {} }
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count = product.count + payload.num
      if (product.count < 0) {
        product.count = 0
      }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {},
  modules: {}

})