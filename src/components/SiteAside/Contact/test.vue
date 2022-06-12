<template>
  <div class="test-container">
      <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/styles/global.less";

export default {
    components: {
        Contact,
    },
}
</script>

<style scoped>
    .test-container {
        width: 300px;
        height: 300px;
        margin: 0 auto;
        margin-top: 30px;
        padding-top: 200px;
        background: black;
    }
</style>