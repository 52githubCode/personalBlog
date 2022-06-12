<template>
  <div class="area">
      <Empty text="暂无数据" />
  </div>
</template>

<script>
import Empty from "./"

export default {
    components: {
        Empty,
    },
}
</script>

<style lang="less" scoped>
    .area {
        position: relative;
        width: 500px;
        height: 500px;
        background: #008c8c;
    }
</style>