<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <DetailContent v-if="data" :blog="data" />
      <DetailComment v-if="data" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <DetailTOC v-if="data" :toc="data.toc" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import DetailContent from "./components/DetailContent";
import DetailTOC from "./components/DetailTOC";
import DetailComment from "./components/DetailComment";
import fetchData from "@/mixins/fetchData.js";
import { getOneBlog } from "@/api/blog.js";
import mainScroll from "@/mixins/mainScroll";
import { titleController } from "@/utils";
export default {
  mixins: [fetchData(null), mainScroll("mainContainer")],
  components: {
    Layout,
    DetailContent,
    DetailTOC,
    DetailComment,
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