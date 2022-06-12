<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea 
      title="留言板" 
      :subTitle="`(${ data.total })`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import * as msgApi from "@/api/message";
import mainScroll from "@/mixins/mainScroll.js";

export default {
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return msgApi.getMessage(this.page, this.limit);
    },
    async handleSubmit(data, callback) {
      const resp = await msgApi.postMessage(data);
      callback("感谢您的留言");
      this.data.rows.unshift(resp);
      this.data.total++;
    },
    async handleScroll(dom) {
      if (this.isLoading || !dom) {
          // 目前正在加载更多
          return;
      }
      const range = 100; // 定一个可接受的范围，在这个范围内都算达到了底部
      const dec = Math.abs((dom.clientHeight + dom.scrollTop) - dom.scrollHeight);
      if (dec <= range) {
          this.fetchMore();
      }
    },
    // 加载下一页
    async fetchMore() {
      if (!this.hasMore) {
          // 没有更多数据了
          return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
  },
}
</script>

<style scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-container {
  width: 700px;
  margin: 0 auto;
}
</style>