<template>
  <div class="site-aside-container">
      <div v-if="data" class="avatar-container">
          <div class="avatar">
            <Avatar :url="data.avatar" />
          </div>
      </div>
      <h1 v-if="data" class="title">{{ data.siteTitle }}</h1>
      <Menu />
      <Contact v-if="data" />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";

export default {
    components: {
        Avatar,
        Menu,
        Contact,
    },
    computed: {
        ...mapState("setting", ["data"]),
    },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
    .site-aside-container {
        width: 100%;
        height: 100%;
        padding: 20px 0;
        background: @dark;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .avatar-container {
        position: relative;
        height: 170px;
    }
    .avatar {
        .self-center();
    }
    .title {
        color: #fff;
        text-align: center;
        font-size: 20px;
    }
</style>