<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import Nearby from "../home/Nearby.vue";
import Docker from "../home/docker.vue";
import StaticPart from "../home/StaticPart.vue";
import { ref } from "vue";
export default {
  components: {
    Nearby,
    Docker,
    StaticPart,
  },
  setup() {},
};
</script>

<style lang='scss' scoped>
.wrapper {
  // .wrapper
  //设置滚动
  overflow-y: auto;
  position: absolute;
  top: 0rem;
  bottom: 0.5rem;
  left: 0rem;
  right: 0rem;

  padding: 0 0.18rem;
}
</style>