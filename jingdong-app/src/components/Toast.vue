<template>
  <div class="toast">{{ message }}</div>
</template>
<script>
// 重新导出
export { useShowToastEffect } from "./useShowToastEffect";
export default {
  props: ["message"],
};
</script>


<style lang='scss' scoped>
.toast {
  position: fixed;
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  border-radius: 0.05rem;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>