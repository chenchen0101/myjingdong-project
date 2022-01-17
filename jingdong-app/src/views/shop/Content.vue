<template>
  <div class="goodsContent">
    <div class="categrory">
      <div class="categrory__item categrory__item--active">全部商品</div>
      <div class="categrory__item">秒杀</div>
      <div class="categrory__item">新鲜水果</div>
      <div class="categrory__item">休闲食品</div>
      <div class="categrory__item">时令时蔬</div>
      <div class="categrory__item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product__item">
        <img src="src\assets\提子.jpg" class="img" />
        <div class="detail">
          <h4 class="title">
            番茄250g/份番茄250g/份番茄250g/份番茄250g/份番茄250g/份番茄250g/份
          </h4>
          <p class="sales">月售10件</p>
          <p class="price">
            <span class="yen">&yen;</span>33.6
            <span class="origin">&yen;66.6</span>
          </p>
        </div>
        <div class="product__number">
          <span class="minus">-</span>
          0
          <span class="plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/request";
import { reactive } from "@vue/reactivity";
function getImageUrl(name) {
  return new URL(`../../assets/${name}`, import.meta.url).href;
}
export default {
  name: "Content",
  setup() {
    const getproductsdata = async () => {
      const result = await get("/api/shop/shop-content/1/products", {
        tab: "all",
      });
      if (result.data?.errno === 0 && result.data?.data) {
        console.log(result.data);
      }
    };
    getproductsdata();
    return { getproductsdata };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";
.goodsContent {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.49rem;
}
.categrory {
  width: 0.76rem;
  height: 100%;
  overflow-y: scroll;
  background: #f5f5f5;
  &__item {
    font-size: 0.14rem;
    line-height: 0.4rem;
    text-align: center;
    &--active {
      background: #fff;
    }
  }
}
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
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    .detail {
      //title有很多内容，但要撑开外层的高度，触发外层BFC
      overflow: hidden;
      .title {
        line-height: 0.2rem;
        font-size: 14px;
        color: #333333;
        //使超出内容...表示
        @include ellipsis;
      }
      .sales {
        font-size: 0.12rem;
        color: #333333;
        line-height: 16px;
        margin: 0.06rem 0;
      }
      .price {
        line-height: 0.2rem;
        font-size: 0.14rem;
        color: #e93b3b;
        .yen {
          font-size: 10px;
        }
        .origin {
          font-size: 10px;
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
      font-size: 14px;
      color: #333333;
      line-height: 16px;
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
</style>