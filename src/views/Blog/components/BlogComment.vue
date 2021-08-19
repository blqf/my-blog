<template>
  <div ref="mainContainer" id="comment" class="blog-comment-container">
    <MessageArea
      bigTitle="评论区"
      title="评论列表"
      :total="data.total"
      :list="data.rows"
      :isListLoading="isListLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import { getCommentByPage, postComment } from "@/api/blog";
export default {
  components: {
    MessageArea,
  },
  mixins: [fetchData({})],
  data() {
    return {
      isListLoading: false,
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return await getCommentByPage(
        this.$route.params.categoryId,
        this.page,
        this.limit
      );
    },
    async fetchMore() {
      // 加载下一页
      if (!this.hasMore) {
        return;
      }
      this.isListLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isListLoading = false;
    },
    async handleSubmit(commentInfo, callback) {
      const resp = await postComment(commentInfo);
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功", "success");
    }
  },
  created() {
    this.$bus.$on('mainScroll', async (container) => {
      if (this.isListLoading || !container) return;
      const range = 100;
      const dec = container.scrollHeight  - (container.scrollTop + container.clientHeight);
      if (dec < 100) {
        this.fetchMore();
      }
    })
  }
};
</script>
