<template>
  <div class="main">
    <h3 class="main__title">附近店铺</h3>
    <router-link
      v-for="item in nearbyList"
      :key="item"
      :to="`/shop/${item.id}`"
    >
      <Shopinfo :item="item" />
    </router-link>
  </div>
</template>

<script>
//附近店铺和店铺详情的组件一样。所以将near的样式抽出为独立的shopinfo
//实现组件复用。shop也能共用
import Shopinfo from "../../components/Shopinfo.vue";
import { ref } from "vue";
import { get } from "../../utils/request";
function getImageUrl(name) {
  return new URL(`../../assets/${name}`, import.meta.url).href;
}
export default {
  name: "Nearby",
  components: { Shopinfo },
  setup() {
    const nearbyList = ref(null);
    async function getNearbyList() {
      const result = await get("/api/shop/hot-list");
      if (result.data?.errno === 0 && result.data?.data.length) {
        nearbyList.value = result.data.data;
      }
    }
    getNearbyList();
    return {
      nearbyList,
      getNearbyList,
    };
  },
};
</script>
<style lang='scss' scoped>
.main {
  &__title {
    font-size: 0.18rem;
    // font-weight: normal;
    color: #333333;
    margin: 0.16rem 0 0.14rem 0;
  }
  // 清除router-link标签默认的下划线和蓝色字体
  a {
    text-decoration: none;
    color: #333333;
  }
}
</style>