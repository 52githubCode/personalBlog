<template>
  <div class="loading-container">
      <img :src="loadingUrl" alt="加载图">
  </div>
</template>

<script>
import loadingUrl from "@/assets/loading.svg";
export default {
    data() {
        return {
            loadingUrl,
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.loading-container {
    .self-center()
}
</style>