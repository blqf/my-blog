<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :dataList="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import { debounce } from "@/utils";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    tocWithSelect() {
      // 根据toc属性与activeAnchor得到带有isSelect属性的数组
      const getTOC = (toc = []) => {
        return toc.map((item) => ({
          ...item,
          isSelect: item.anchor === this.activeAnchor,
          children: getTOC(item.children),
        }));
      };
      return getTOC(this.toc);
    },
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const item of toc) {
          doms.push(document.getElementById(item.anchor));
          if (item.children && item.children.length) {
            addToDoms(item.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setSelect(container) {
      if (!container) {
        return;
      }
      this.activeAnchor = "";
      const range = 200;
      // 设置activeAnchor为正确的值
      for (const dom of this.doms) {
        // 看一下当前的dom存不存在
        if (!dom) continue;
        // 标题离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top > 0 && top <= range) {
          // 在规定范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在规定范围下方
          return;
        } else {
          // 在规定范围上方
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50)
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  }
};
</script>

<style scoped>
.blog-toc-container {
  padding: 20px 30px;
  box-sizing: border-box;
}
</style>