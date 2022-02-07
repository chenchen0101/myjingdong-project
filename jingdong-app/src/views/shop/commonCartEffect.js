import { useStore } from "vuex";

//使用购物车
export const useCommontCartEffect = () => {
  const store = useStore();

  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit("changeCartItemInfo", {
      shopId,
      productId,
      productInfo,
      num,
    });
  };
  return { changeCartItemInfo };
};

