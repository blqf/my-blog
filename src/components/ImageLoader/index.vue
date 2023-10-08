<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" />
    <img
      :style="{
        opacity: originOpacity,
        transition: `${duration}ms`
      }"
      :src="src"
      @load="handleLoad"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, // 源图片是否加载完成
      everythingDone: false //是否一切尘埃落定(包括图片加载和外部事件处理)，加载完成
    };
  },
  computed: {
    originOpacity() {// 根据原图片是否加载来完成控制原图片透明度
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() { // 原图片加载后的回调 
      this.originLoaded = true;
      this.$emit('loaded');
      setTimeout(() => {
        this.everythingDone = true;
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>