<template>
  <div class="wrapper__position">
    <div class="left">
      <div class="iconfont">&#xe602;</div>
      <div class="position__title">北京理工大学国防科技园2号楼10层</div>
    </div>
    <div class="iconfont">&#xe850;</div>
  </div>
  <div class="wrapper__search">
    <span class="iconfont">&#xe651;</span>
    <span>山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img class="banner__img" src="../../assets/banner.jpg" alt="" />
    <ul class="banner__body">
      <li class="serve" v-for="item in list" :key="item">
        <img :src="item.img" class="img" />
        <div class="title">{{ item.title }}</div>
      </li>
    </ul>
  </div>

  <div class="separate"></div>
</template>


<script>
import { reactive } from "vue";
function getImageUrl(name) {
  return new URL(`../../assets/${name}`, import.meta.url).href;
}
export default {
  name: "StaticPart",
  setup() {
    const list = reactive([
      { img: getImageUrl("超市@2x.png"), title: "超市便利" },
      { img: getImageUrl("菜市场@2x.png"), title: "菜市场" },
      { img: getImageUrl("水果店@2x.png"), title: "水果店" },
      { img: getImageUrl("鲜花@2x.png"), title: "鲜花绿植" },
      { img: getImageUrl("医药健康@2x.png"), title: "医药健康" },
      { img: getImageUrl("家居@2x.png"), title: "家居时尚" },
      { img: getImageUrl("蛋糕@2x.png"), title: "烘焙蛋糕" },
      { img: getImageUrl("签到@2x.png"), title: "签到" },
      { img: getImageUrl("大牌免运@2x.png"), title: "大牌免运" },
      { img: getImageUrl("红包@2x.png"), title: "红包套餐" },
    ]);
    return {
      list,
    };
  },
};
</script>


<style lang='scss' scoped>
.wrapper__position {
  display: flex;
  justify-content: space-between;
  padding: 0.16rem 0;
  line-height: 0.22rem;

  color: #333;
  .left {
    display: flex;
    .position__title {
      margin-left: 0.085rem;
    }
  }
}
.wrapper__search {
  width: 3.39rem;
  line-height: 0.32rem;
  margin-bottom: 0.12rem;
  border-radius: 0.16rem;
  background: #f5f5f5;
  font-size: 14px;
  color: #b7b7b7;
  .iconfont {
    margin: 0 0.12rem 0 0.16rem;
    vertical-align: top;
  }
}
.banner {
  &__img {
    width: 100%;
    border-radius: 0.07rem;
  }
  &__body {
    display: flex;
    flex-wrap: wrap;
    // justify-content: center;
    margin: 0rem;
    padding: 0rem;
    .serve {
      list-style-type: none;
      margin: 0rem 0.099rem 0rem 0.099rem;
      text-align: center;
      width: 0.48rem;

      .img {
        margin-top: 0.16rem;
        height: 0.4rem;
        width: 0.4rem;
      }
      .title {
        margin-top: 0.06rem;
        font-size: 0.12rem;
      }
    }
  }
}
.separate {
  height: 0.1rem;
  background: #f1f1f1;
  //不继承副属性，左右往外去撑
  margin: 0.16rem -0.18rem;
}
</style>