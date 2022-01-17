import { reactive, toRefs } from "vue";
export function useShowToastEffect() {
  const dataTaost = reactive({ show: false, toastMessage: "" });
  let { show, toastMessage } = toRefs(dataTaost)
  const showToast = function (tips) {
    show.value = true;
    toastMessage.value = tips;
    //两秒显示登录超时
    setTimeout(() => {
      show.value = false;
      toastMessage.value = "";
    }, 2000);
  };

  return {
    showToast,
    toastMessage,
    show,
  };
}