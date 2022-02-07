<template>
  <div class="goodsContent">
    <div class="categrory">
      <div
        :class="{
          categrory__item: true,
          'categrory__item--active': currentTab === item.tab,
        }"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in List" :key="item.id">
        <img :src="item.imgUrl" class="img" />
        <div class="detail">
          <h4 class="title">
            {{ item.name }}
          </h4>
          <p class="sales">{{ item.sales }}</p>
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
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/request";
import { computed, reactive, toRefs, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useCommontCartEffect } from "./commonCartEffect";
function getImageUrl(name) {
  return new URL(`../../assets/${name}`, import.meta.url).href;
}

//categories相关代码
const categories = [
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "水果", tab: "fruit" },
];

//和tab切换相关的逻辑
const uesTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const handleTabClick = (tab) => {
    currentTab.value = tab;
  };
  return { currentTab, handleTabClick };
};

//和列表内容相关
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ List: [] });

  const getproductsdata = async () => {
    const result = await get(`/api/shop/shop-content/${shopId}/products`, {
      tab: currentTab.value,
    });
    if (result.data?.errno === 0 && result.data?.data) {
      content.List = result.data.data;
    }
  };
  //watchEffect指首次页面加载或数据变化的时候都会执行一次
  watchEffect(() => {
    getproductsdata();
  });
  const { List } = toRefs(content);
  return { List };
};

export default {
  name: "Content",
  setup() {
    const { currentTab, handleTabClick } = uesTabEffect();
    const { List } = useCurrentListEffect(currentTab);
    const { cartList, changeCartItemInfo } = useCommontCartEffect();
    const route = useRoute();
    const shopId = route.params.id;
    return {
      currentTab,
      List,
      categories,
      handleTabClick,
      shopId,
      cartList,
      changeCartItemInfo,
    };
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
        font-size: 0.14rem;
        color: #333333;
        //使超出内容...表示
        @include ellipsis;
      }
      .sales {
        font-size: 0.12rem;
        color: #333333;
        line-height: 0.16rem;
        margin: 0.06rem 0;
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
      font-size: .14rem;
      color: #333333;
      line-height: .16rem;
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