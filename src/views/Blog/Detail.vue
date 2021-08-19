<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail v-if="data" :blog="data" />
      <BlogComment v-if="data" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC v-if="data" :toc="data.toc" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import fetchData from "@/mixins/fetchData.js";
import { getOneBlog } from "@/api/blog.js";
import mainScroll from "@/mixins/mainScroll";
import { titleController } from "@/utils";
export default {
  mixins: [fetchData(null), mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      let resp = await getOneBlog();
      if (!resp) {
        // 文章不存在
        this.$router.push("/404");
        return;
      }
      titleController.setRotuerTitle(resp.title);
      return resp;
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped>
.main-container {
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px 30px;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  overflow-y: scroll;
  width: 250px;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
</style>