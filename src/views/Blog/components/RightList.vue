<template>
  <ul class="right-list-container">
    <li
      v-for="(item, index) in dataList"
      :key="index"
      @click.stop="handleClick(item)"
    >
      <span :class="{ active: item.isSelect }">
        {{ item.name }}
      </span>
      <span
        v-if="item.additional"
        class="additional"
        :class="{ active: item.isSelect }"
        >{{ item.additional }}</span
      >
      <!-- 递归显示当前组件 -->
      <RightList :dataList="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    dataList: {
      type: Array,
      default: () => [], //防止父组件们共用同一个数组引用
    },
  },
  methods: {
    handleClick(item) {
      if (item.isSelect) {
        return;
      }
      this.$emit("select", item);
    },
  },
};
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
    cursor: pointer;
    font-size: 14px;
    .additional {
      margin-left: 1em;
      font-size: 12px;
      color: #888;
    }
    .active {
      color: @words;
      font-weight: bold;
      color: #f40;
    }
  }
}
</style>