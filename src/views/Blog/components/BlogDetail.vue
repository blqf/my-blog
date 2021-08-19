<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期：{{ formatDate(blog.createDate) }}</span>
      <span>浏览：{{ blog.scanNumber }}</span>
      <a href="#comment">评论：{{ blog.scanNumber }}</a>
      <router-link :to="{
        name: 'categoryBlog',
        params: {
          categoryId: blog.category.id
        }
      }">{{ blog.category.name }}</router-link>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils/index.js";
import '@/styles/markdown.css';
import 'highlight.js/styles/github.css';
export default {
  props: {
    blog: {
      type: Object,
      default: {},
    },
  },
  methods: {
      formatDate
  }
};
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.aside{
    font-size: 12px;
    color: @lightWords;
    span, a{
        padding: 0 10px 0;
    }
}
.markdown-body{
    margin: 1em 0;
}
</style>