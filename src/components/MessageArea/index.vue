<template>
  <div class="message-area-container">
    <h2 class="bigTitle">{{ bigTitle }}</h2>
    <FormData @submit="handleSubmit" />
    <div class="message-list">
      <h3>
        {{ title }}
        <span v-if="total">（{{ total }}）</span>
      </h3>
      <MessageList :list="list" />
    </div>
    <div class="loading" v-loading="isListLoading">
      {{
        list.length >= total && !isListLoading
          ? "(￣_,￣ )呀，到底啦！！！"
          : ""
      }}
    </div>
  </div>
</template>

<script>
import FormData from "./FormData";
import MessageList from "./MessageList";
export default {
  components: {
    FormData,
    MessageList,
  },
  props: {
    bigTitle: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    total: {
      type: Number,
      default: 0,
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleSubmit(formData, callback) {
      this.$emit("submit", formData, callback);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.loading {
  position: relative;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  color: @primary;
}
</style>