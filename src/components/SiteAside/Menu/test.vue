<template>
  <div class="test-container">
      <Menu />
  </div>
</template>

<script>
import Menu from "./"
import "@/styles/global.less";

export default {
    components: {
        Menu,
    },
}
</script>

<style scoped>
    .test-container {
        width: 400px;
        height: 400px;
        margin: 0 auto;
        background: #000;
    }

</style>