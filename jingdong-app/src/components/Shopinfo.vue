<template>
  <div>
    <ul class="shop">
      <li class="name">
        <img :src="item.imgUrl" class="img" />
        <div class="content">
          <div class="title">{{ item.name }}</div>
          <div class="tags">
            <span class="tag">月售{{ item.sales }}</span>
            <span class="tag">起送{{ item.expressLimit }}</span>
            <span class="tag">运费{{ item.expressPrice }}</span>
          </div>
          <p class="highlight">{{ item.slogan }}</p>
        </div>
      </li>
      <!-- 若子组件中传递了hideLine(让子组件的hideLine为true),则line为false不显示，否则，显示 -->
      <div :class="{ line: hideLine ? false : true }"></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Shopinfo",
  props: ["item", "hideLine"],
};
</script>

<style lang="scss" scoped>
.shop {
  display: flex;
  flex-wrap: wrap;
  // padding: 0.12rem 0 0 0;
  // margin-top: 0.12rem;
  .name {
    display: flex;
    list-style: none;
    .img {
      width: 0.56rem;
      height: 0.56rem;
    }
    .content {
      flex: 1;
      margin-left: 0.16rem;
      .title {
        font-size: 0.16rem;
        height: 0.22rem;
      }
      .tags {
        font-size: 0.13rem;
        margin: 0.08rem 0 0.08rem 0;

        height: 0.18rem;
        .tag {
          padding-right: 0.16rem;
        }
      }
      .highlight {
        // rgba: rgba(233, 59, 59, 1);
        height: 0.18rem;
        font-size: 0.13rem;
        color: #e93b3b;
        margin: 0;
      }
    }
  }
  .line {
    width: 2.67rem;
    height: 0.01rem;
    margin: 0.12rem 0rem 0.12rem 0.72rem;
    background: #f1f1f1;
  }
}
</style>