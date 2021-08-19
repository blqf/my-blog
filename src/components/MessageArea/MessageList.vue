<template>
  <ul class="message-list-container">
    <li v-for="item in list" :key="item.id">
      <Avatar :url="item.avatar" :size="50" />
      <div class="right">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="content">{{ item.content }}</div>
      </div>
      <span class="datetime">{{ formatDatetime(item.createDate) }}</span>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import { formatDatetime } from "@/utils";
export default {
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      defualt: () => ([]),
    },
  },
  methods: {
    formatDatetime,
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.message-list-container {
  padding: 0;
  list-style: none;
  color: @gray;
  li {
    display: flex;
    position: relative;
    padding: 20px;
    border-bottom: 1px solid @gray;
    .avatar-container {
      flex-shrink: 0;
    }
    .right {
      padding-left: 20px;
      .nickname {
        color: darken(@success, 5%);
        font-weight: 600;
      }
      .content {
        font-size: 14px;
        margin-top: 10px;
        color: @words;
      }
    }
    .datetime {
      position: absolute;
      right: 0;
      top: 20px;
      font-size: 12px;
      color: @gray;
    }
  }
}
</style>
