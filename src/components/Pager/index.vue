<template>
    <!-- 只有总页数大于1时才显示 -->
  <div v-if="pageNumber > 1" class="pager-container">
        <a @click="handleClick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
        <a @click="handleClick( current - 1 )" :class="{ disabled: current === 1 }">&lt;&lt;</a>
        <a @click="handleClick(n)"
            v-for="(n, i) in numbers" 
            :key="i" 
            :class="{ active: n === current }"
        >
            {{ n }}
        </a>
        <a @click="handleClick( current + 1 )" :class="{ disabled: current === pageNumber }">&gt;&gt;</a>
        <a @click="handleClick(pageNumber)" :class="{ disabled: current === pageNumber }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
    props: {
        current: {
          type: Number,
          default: 1,
        },
        total: { // 总数据数
          type: Number,
          default: 0,
        },
        limit: { // 每页展示的数据数
          type: Number,
          default: 10,
        },
        visibleNumber: { // 可显示的页码总数
          type:Number,
          default: 10,
        },
    },
    computed: {
        // 总页数
        pageNumber() {
            return Math.ceil(this.total / this.limit);
        },
        // 得到显示的最小数字
        visibleMin() {
            let min = this.current - Math.floor(this.visibleNumber / 2)
            if (min <= 0) {
                min = 1;
            }
            return min;
        },
        visibleMax() {
            let max = this.visibleMin + this.visibleNumber - 1;
            if (max > this.pageNumber) {
                max = this.pageNumber;
            }
            return max;
        },
        numbers() {
            let nums = [];
            for(let i = this.visibleMin; i<=this.visibleMax; i++) {
                nums.push(i);
            }
            return nums;
        }
    },
    methods: {
        handleClick(newPage) {
            if (newPage < 1) {
                newPage = 1;
            }
            if (newPage > this.pageNumber) {
                newPage = this.pageNumber;
            }
            if (newPage === this.current) {
                return;
            }
            // 抛出一个事件
            this.$emit("pageChange", newPage);
        }
    },
}
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";

    .pager-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        overflow: hidden;
        a{
            margin: 0 6px;
            color: @primary;
            cursor: pointer;
            &.disabled {
                color: @lightWords;
                cursor: not-allowed;
            }
            &.active {
                color: @words;
                cursor: text;
            }
        }
    }
</style>