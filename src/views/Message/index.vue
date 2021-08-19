<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      bigTitle="留言板"
      title="留言列表"
      :total="data.total"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fethData from "@/mixins/fetchData";
import * as msgApi from "@/api/message";
import mainScroll from "@/mixins/mainScroll";
export default {
  mixins: [fethData({ total: 0, rows: [] }), mainScroll('messageContainer')],
  components: {
    MessageArea,
  },
  data() {
    return {
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
      return await msgApi.getMessagesByPage(this.page, this.limit);
    },
    async handleSubmit(msgInfo, callback) {
      const resp = await msgApi.postMessage(msgInfo);
      callback("感谢您的留言");
      this.data.rows.unshift(resp);
      this.data.total++;
    },
    handleScroll(container) {
      if (this.isLoading || !container) return;
      const range = 100;
      const dec =
        container.scrollHeight - (container.scrollTop + container.clientHeight);
      if (dec < range) {
        this.fetchMore();
      }
    },
    async fetchMore() {
      // 加载下一页
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
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

<style scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 70%;
  margin: 0 auto;
}
</style>