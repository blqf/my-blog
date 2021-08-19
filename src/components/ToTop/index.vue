<template>
  <div v-show="show" class="to-top-container" @click="handleClick">top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleScroll(container) {
      if (!container) {
        this.show = false;
        return;
      }
      this.show = container.scrollTop >= 500;
    },
    handleClick() {
        this.$bus.$emit('setMainScroll', 0);
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
};
</script>

<style lang="less"scoped>
@import "~@/styles/var.less";
.to-top-container {
  width: 50px;
  height: 50px;
  background-color: @primary;
  position: fixed;
  bottom: 30px;
  right: 50px;
  z-index: 10;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 200ms;
  &:hover {
    background-color: darken(@primary, 10%);
  }
}
</style>