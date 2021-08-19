<template>
  <div
    v-loading="loading"
    class="home-container"
    ref="container"
    @wheel="handleWheel"
  >
    <!-- 内容 -->
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionend"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <!-- 箭头 -->
    <div v-show="index > 0" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      class="icon icon-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <!-- 指示器 -->
    <ul class="indicator">
      <li
        :class="{
          active: i === index,
        }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import CarouselItem from "./CarouselItem";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
    CarouselItem,
  },
  data() {
    return {
      index: 0, // 当前显示的第几张轮播图
      containerHeight: 0, // 整个容器的高度
      switching: false, // 是否正在翻页中
    };
  },
  computed: {
    marginTop() {
      // 当前轮播图最顶端的位置
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    switchTo(i) {
      // 切换页面到指定的页
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -50 && this.index > 0) {
        // 向上滚动
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 50 && this.index < this.data.length - 1) {
        // 向下滚动
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionend() {
      // 翻页结束后改变switch为false
      this.switching = false;
    },
    handleResize() {
      // 监听浏览器页面尺寸变化的函数
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    // 监听浏览器尺寸变化
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
@gap: 15px;
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      height: 100%;
      height: 100%;
    }
  }
  .icon {
    .self-center();
    transform: translateX(-50%);
    color: @gray;
    font-size: 30px;
    cursor: pointer;
    &.icon-up {
      top: @gap;
      animation: jump 1s linear infinite alternate;
    }
    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump 1s linear infinite alternate-reverse;
    }
    @keyframes jump {
      0% {
        transform: translate(-50%, 10px);
      }
      100% {
        transform: translate(-50%, -10px);
      }
    }
  }
  .indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 20px;
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      transition: 0.5;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>