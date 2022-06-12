<template>
  <div class="img-container">
    <ImageLoader src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        :duration="3000"
        @load="handleLoaded" />
  </div>
</template>

<script>
import ImageLoader from "./";

export default {
    components: {
        ImageLoader,
    },
    methods: {
        handleLoaded() {
            console.log("图片组件加载完成，请开始你的表演");
        }
    },
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";

.img-container {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    border: 2px solid;
}
</style>