<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h3>文章分类</h3>
    <RightList :dataList="dataList" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import fetchData from "@/mixins/fetchData.js";
import { getBlogCategories } from "@/api/blog.js";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
    dataList() {
      const totalArticle = this.data.reduce((a, b) => a + b.articleCount, 0);
      // 添加“全部”选项，获取完成数据
      const totalData = [
        {
          name: "全部",
          articleCount: totalArticle,
          id: -1
        },
        ...this.data,
      ];
      // 1. 添加additional属性，用以展示article数量
      // 2. 添加isSelect属性，用以激活选中状态
      return totalData.map((item) => ({
        ...item,
        additional: item.articleCount + "篇",
        isSelect: item.id === this.routeInfo.categoryId,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogCategories();
    },
    handleSelect({ id }) {
      const query = {
        page: 1,
        limit: this.routeInfo.limit,
      };
      // 改变路由
      if (id === -1) {
        // 无分类的文章列表
        this.$router.push({
          name: "blog",
          query,
        });
      } else {
        // 分类的文章列表
        this.$router.push({
          name: "categoryBlog",
          query,
          params: {
            categoryId: id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  box-sizing: border-box;
  width: 240px;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h3 {
    font-weight: bold;
    letter-spacing: 2px;
    margin: 0;
  }
}
</style>