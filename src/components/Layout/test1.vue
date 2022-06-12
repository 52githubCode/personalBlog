<template>
  <div class="test-container">
      <Layout>
          <template v-slot:left>
            <div class="aside">
                <SiteAside />
            </div>
          </template>
          <template v-slot:default>
              中间区域
          </template>
      </Layout>
  </div>
</template>

<script>
import Layout from "./";
import SiteAside from "@/components/SiteAside";
import "@/styles/global.less";

export default {
    components: {
        Layout,
        SiteAside,
    },
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
    .test-container {
        .self-fill("fixed");
    }
    .aside {
        width: 250px;
        height: 100%;
    }
</style>