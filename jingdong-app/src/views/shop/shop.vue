<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleClick">&#xe710;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe651;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
       <Shopinfo
      v-for="item in shopContent"
      :item="item"
      :key="item.id"
      :hideLine="true"
    />
    <Content />
  </div>
</template>

<script>
import Content from "./Content.vue";
import Shopinfo from "../../components/Shopinfo.vue";
//在 setup 里面没有访问 this，所以我们不能再直接访问 this.$router
//或 this.$route。作为替代，我们使用 useRouter 函数
import { useRouter, useRoute } from "vue-router";

import { ref, reactive, toRefs } from "vue";
import { get } from "../../utils/request";

function getImageUrl(name) {
  return new URL(`../../assets/${name}`, import.meta.url).href;
}

//获取商家详情相关
const getshopContentEffect = function () {
  //route获取路由参数params.id
  const route = useRoute();
  //从后端获取跳转数据
  const shopContent = reactive({ item: {} });
  async function getshopContent() {
    const result = await get(`/api/shop/shop-content/${route.params.id}`);
    if (result.data?.errno === 0 && result.data?.data) {
      console.log(result.data.data);
      shopContent.item = result.data.data;
    }
  }

  return { shopContent, getshopContent };
};

//点击返回相关
const handleClickEffect = () => {
  //Router获取的是大的路由
  const router = useRouter();
  function handleClick() {
    router.back();
  }
  return { handleClick };
};

export default {
  name: "Shop",
  components: { Shopinfo, Content },
  setup() {
    const { shopContent, getshopContent } = getshopContentEffect();
    const { handleClick } = handleClickEffect();

    getshopContent();

    return { shopContent, getshopContent, handleClick };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 0.18rem;
  .search {
    display: flex;
    margin: 0.14rem 0 0.02rem 0;
    line-height: 0.32rem;
    &__back {
      font-size: 0.24rem;
      width: 0.3rem;
      color: #b6b6b6;
    }
    &__content {
      display: flex;
      flex: 1;
      line-height: 0.32rem;
      background: #f5f5f5;
      border-radius: 16px;
      &__icon {
        width: 0.44rem;
        text-align: center;
        color: #b7b7b7;
      }
      &__input {
        display: block;
        width: 100%;
        padding-right: 0.2rem;
        border: none;
        outline: none;
        background: none;
        height: 0.32rem;
        color: #333333;
        font-size: 14px;
        &::placeholder {
          color: #333333;
        }
      }
    }
  }
}
</style>