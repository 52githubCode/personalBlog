<template>
  <ul class="right-list-container">
      <li v-for="(item, i) in list" :key="i">
          <span @click="handleClick(item)" :class="{ active: item.isSelect }">
              {{ item.name }}
          </span>
          <span 
            v-if="item.aside" 
            @click="handleClick(item)" 
            class="aside" 
            :class="{ active: item.isSelect }"
          >
            {{ item.aside }}
          </span>
          <!-- 显示当前组件 -->
          <!-- 自己递归自己，在自己里面使用自己的组件，也会有事件扔出来，事件处理不了就交给父组件，层层上抛 -->
          <RightList :list="item.children" @select="handleClick" />
      </li>
  </ul>
</template>

<script>
export default {
    name: "RightList", // 当组件名字缺失时作为组件名字
    // [ { name: "xxx", isSelect: true, children: [ { name: "bbb", isSelect: false } ]} ]
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        handleClick(item) {
            if (!item.isSelect) {
                this.$emit("select", item);
            }
        }
    },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
    .right-list-container {
        list-style: none;
        padding: 0;
        .right-list-container {
            margin-left: 1em;
        }
        li {
            min-height: 40px;
            line-height: 40px;
            font-size: 14px;
            cursor: pointer;
        }
        .active {
            color: @warn;
            font-size: bold;
        }
    }
    .aside {
        font-size: 12px;
        margin-left: 1em;
        color: @gray;
    }
</style>