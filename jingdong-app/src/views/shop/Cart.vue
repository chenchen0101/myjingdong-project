<template>
  <div class="cart">
    <div class="product">
      <div class="product__item" v-for="item in productList" :key="item.id">
        <!--tamplate是占位符，item.count>0才展示 -->
        <template v-if="item.count > 0">
          <img :src="item.imgUrl" class="img" />
          <div class="detail">
            <h4 class="title">
              {{ item.name }}
            </h4>
            <p class="price">
              <span class="yen">&yen;</span>{{ item.price }}
              <span class="origin">&yen;{{ item.oldPrice }}</span>
            </p>
          </div>
          <div class="product__number">
            <span
              class="minus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item.id, item, -1);
                }
              "
              >-</span
            >
            {{ item.count || 0 }}
            <span
              class="plus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item.id, item, 1);
                }
              "
              >+</span
            >
          </div>
        </template>
      </div>
    </div>
    <div class="check">
      <div class="icon">
        <div class="iconbag iconfont">&#xe6df;</div>
        <div class="tag">{{ total }}</div>
      </div>
      <div class="info">
        总计：<span class="info__price">&yen; {{ price }}</span>
      </div>
      <div class="btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useCommontCartEffect } from "./commonCartEffect";
//获取购物车信息逻辑
const useCartEffect = (shopId) => {
  const store = useStore();
  const { changeCartItemInfo } = useCommontCartEffect();
  const cartList = store.state.cartList;
  const total = computed(() => {
    const productList = cartList[shopId];
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        count += product.count;
      }
    }
    return count;
  });
  const price = computed(() => {
    const productList = cartList[shopId];
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        count += product.count * product.price;
      }
    }
    return count.toFixed(2);
  });

  const productList = computed(() => {
    const productList = cartList[shopId] || [];
    return productList;
  });
  return { total, price, productList, changeCartItemInfo };
};
export default {
  name: "Cart",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;

    const { total, price, productList, changeCartItemInfo } =
      useCartEffect(shopId);
    return { total, price, productList, shopId, changeCartItemInfo };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";
.cart {
  position: absolute;
  bottom: 0rem;
  left: 0%;
  width: 3.75rem;
  height: 0.49rem;
  .product {
    overflow-y: scroll;
    flex: 1;
    &__item {
      position: relative;
      display: flex;
      padding: 0.12rem 0;
      margin: 0 0.16rem;
      border-bottom: 0.01rem solid #f1f1f1;
      .img {
        width: 0.46rem;
        height: 0.46rem;
        margin-right: 0.16rem;
      }
      .detail {
        //title有很多内容，但要撑开外层的高度，触发外层BFC
        overflow: hidden;
        .title {
          line-height: 0.2rem;
          font-size: 0.14rem;
          color: #333333;
          //使超出内容...表示
          @include ellipsis;
        }

        .price {
          line-height: 0.2rem;
          font-size: 0.14rem;
          color: #e93b3b;
          .yen {
            font-size: 0.1rem;
          }
          .origin {
            font-size: 0.1rem;
            color: #999999;
            text-decoration: line-through;
            margin-left: 0.06rem;
          }
        }
      }
      .product__number {
        position: absolute;
        right: 0rem;
        bottom: 0.12rem;
        font-size: 0.14rem;
        color: #333333;
        line-height: 0.16rem;
        .minus,
        .plus {
          display: inline-block;
          text-align: center;
          font-size: 0.2rem;
          width: 0.2rem;
          height: 0.2rem;
          line-height: 0.17rem;
          border-radius: 50%;
        }
        .minus {
          border: 0.01rem solid #666;
          color: #666666;
          margin-right: 0.05rem;
        }
        .plus {
          margin-left: 0.05rem;
          background: #0091ff;
          color: #fff;
        }
      }
    }
  }
  .check {
    flex: 1;
    display: flex;
    height: 0.49rem;
    border-top: 0.01rem solid #f1f1f1;
    line-height: .49rem;
    .icon {
      position: relative;
      width: 0.84rem;
      .iconbag {
        display: block;

        margin: 0.02rem auto;
        width: 0.28rem;
        height: 0.26rem;
      }
      .tag {
        position: absolute;
        left: 0.3rem;
        top: 0.04rem;
        padding: 0 0.04rem;
        min-width: 0.2rem;
        height: 0.2rem;
        line-height: 0.2rem;
        background: #e93b3b;
        border-radius: 0.1rem;
        font-size: 0.12rem;
        text-align: center;
        color: #fff;
        transform: scale(0.5);
      }
    }
    .info {
      flex: 1;
      color: #333;
      font-size: 0.12rem;
      .info__price {
        font-size: .18rem;
        color: #e93b3b;
      }
    }
  }
  .btn {
    // position: absolute;
    top: 0%;
    right: 0%;
    width: .98rem;
    height: 100%;
    line-height: .49rem;
    background: #4fb0f9;
    text-align: center;
    font-size: .14rem;
    color: #ffffff;
  }
}
</style>