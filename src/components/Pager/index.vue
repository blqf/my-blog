<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a :class="{ disabled: current === 1 }" @click="handleClick(1)">
      |&lt;&lt;
    </a>
    <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)">
      &lt;&lt;
    </a>
    <a
      v-for="(n, index) in numbers"
      :key="index"
      :class="{ active: n === current }"
      @click="handleClick(n)"
    >
      {{ n }}
    </a>
    <a
      :class="{ disabled: current === pageNumber }"
      @click="handleClick(current + 1)"
    >
      &gt;&gt;
    </a>
    <a
      :class="{ disabled: current === pageNumber }"
      @click="handleClick(pageNumber)"
    >
      &gt;&gt;|
    </a>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      // 当前页码
      type: Number,
      default: 1,
    },
    total: {
      // 总数据量
      type: Number,
      default: 0,
    },
    limit: {
      // 每页数据量
      type: Number,
      default: 10,
    },
    visibleNumber: {
      // 界面可见页码数
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      // 总页数
      return Math.ceil(this.total / this.limit);
    },
    numbers() {
      // 页码数字集合
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
    visibleMin() {
      // 显示的最小页码
      let min = this.current - Math.floor(this.visibleNumber / 2);
      return min < 1 ? 1 : min;
    },
    visibleMax() {
      // 显示的最大页码
      let max = this.visibleMin + this.visibleNumber - 1;
      return max > this.pageNumber ? this.pageNumber : max;
    },
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
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px 0;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>