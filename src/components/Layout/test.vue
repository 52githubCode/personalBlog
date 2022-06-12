<template>
  <div class="test-container">
      <Layout>
          <!-- <template v-slot:left>
              <div class="left">
                  left: Lorem ipsum dolor sit amet.
              </div>
          </template> -->
          <template v-slot:default>
              <div class="main">
                  main: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam commodi accusamus facilis et aliquid perspiciatis vero debitis architecto!
              </div>
          </template>
          <template #right>
              <div class="right">
                  right: Lorem ipsum dolor sit amet.
              </div>
          </template>
      </Layout>
  </div>
</template>

<script>
import Layout from "./";

export default {
    components: {
        Layout,
    },
}
</script>

<style scoped>
    .test-container {
        width: 60%;
        height: 500px;
        margin: 0 auto;
        border: 2px solid;
    }
    .left {
        width: 250px;
        height: 100%;
        background: pink;
    }
    .main {
        width: 100%;
        height: 100%;
        background: blue;
        white-space: nowrap;
    }
    .right {
        width: 150px;
        height: 100%;
        background: red;
    }
</style>