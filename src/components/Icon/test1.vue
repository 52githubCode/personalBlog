<template>
  <div class="icon-container">
      <div class="item" v-for="t in types" :key="t">
          <Icon :type="t" />
          <label>{{ t }}</label>
      </div>
  </div>
</template>

<script>
import Icon,{ types } from "./index1.vue";

export default {
    components: {
        Icon,
    },
    data() {
        return {
            types,
        };
    },
}
</script>

<style scoped>
    .icon-container {
        display: flex;
        justify-content: center;
        margin-top: 1em ;
    }

    .item {
        margin: 0 10px;
        text-align: center;
        font-size: 20px;
        color: #008c8c;
    }

    .item label {
        font-size: 14px;
    }
</style>