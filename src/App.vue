<template>
  <div class="app-container">
      <Layout>
          <template v-slot:left>
            <div class="aside">
                <SiteAside />
            </div>
          </template>
          <template #default>
              <router-view></router-view>
          </template>
      </Layout>
      <ToTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from "@/components/ToTop";
import "@/styles/global.less";

export default {
    components: {
        Layout,
        SiteAside,
        ToTop,
    },
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
    .app-container {
        .self-fill(fixed);
    }
    .aside {
        width: 250px;
        height: 100%;
    }
</style>