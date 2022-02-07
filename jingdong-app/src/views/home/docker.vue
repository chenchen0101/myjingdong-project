<template>
  <div class="docker">
    <!--docker__item--active表示docker__item的一个状态-->
    <div
      v-for="(item, index) in dockerList"
      :key="index"
      :class="{ docker__item: true, 'docker__item--active': index === 0 }"
      class="docker__item"
    >
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";

export default {
  name: "Docker",
  setup() {
    const dockerList = reactive([
      { icon: "&#xe8b9;", title: "首页" },
      { icon: "&#xe877;", title: "购物车" },
      { icon: "&#xe649;", title: "订单" },
      { icon: "&#xe600;", title: "我的" },
    ]);
    return {
      dockerList,
    };
  },
};
</script>
<!--scoped的作用：<style> 标签有 scoped 属性时，
它的 CSS 只作用于当前组件中的元素-->
<style lang='scss' scoped>
.docker {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
  color: #333;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
}

//浏览器里展示的最小像素是12像素，所以用transform属性将其横纵向各缩50%，缩小为10px
.docker__title {
  font-size: 0.2rem;
  transform: scale(0.5, 0.5);
  transform-origin: center top;
}
</style>