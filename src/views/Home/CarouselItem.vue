<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMosemove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" :style="imgPosition" ref="image">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @loaded="this.showWords"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  components: {
    ImageLoader,
  },
  props: ["carousel"],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, // 外层容器尺寸
      innerSize: null, // 里层容器的尺寸
      mouseX: 0, // 鼠标相对于contaienr的横坐标
      mouseY: 0, // 鼠标相对于contaienr的纵坐标
    };
  },
  computed: {
    imgPosition() {
      // 图片的位置
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; // 多出来的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; // 多出来的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    center() {
      // 刚开始时鼠标的位置
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  methods: {
    showWords() {
      // title标题逐渐显示
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.style.transition = "1s linear";
      this.$refs.title.clientWidth; //读取一下DOM属性，强制让浏览器重新渲染，否则浏览器会直接将宽度设置为最终宽度
      this.$refs.title.style.width = this.titleWidth + "px";

      // desc描述逐渐显示
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.style.transition = "2s 1s linear";
      this.$refs.desc.clientWidth; //读取一下DOM属性，强制让浏览器重新渲染，否则浏览器会直接将宽度设置为最终宽度
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize() {
      // 获取图片容器尺寸和图片的尺寸
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    handleMosemove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
  mounted() {
    // 获取title与desc尺寸，用来实现渐出效果
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    // 获取图片容器尺寸和图片尺寸，用来实现拖动鼠标，图片反向移动的效果
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  beforeDestroy() {
    removeEventListener("resize", this.setSize);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    transition: 100ms;
    left: 0;
    top: 0;
  }
  .title,
  .desc {
    position: absolute;
    left: 30px;
    letter-spacing: 3px;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 5px rgba(0, 0, 0, 0.5), 0 -1px 5px rgba(0, 0, 0, 0.5);
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  .title {
    top: calc(50% - 40px);
    font-size: 2em;
  }
  .desc {
    top: calc(50% + 20px);
    color: lighten(@gray, 10%);
  }
}
</style>