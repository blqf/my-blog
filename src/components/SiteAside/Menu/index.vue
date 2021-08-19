<template>
  <nav class="menu-container">
    <router-link
      :exact="item.exact"
      v-for="item in items"
      :key="item.link"
      :to="{ name: item.name }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "home",
          title: "首页",
          icon: "home",
          exact: true, // 激活状态是否要精确匹配
        },
        {
          name: "blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
        {
          name: "about",
          title: "关于我",
          icon: "about",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    display: flex;
    padding: 0 30px;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.router-link-active {
      background-color: darken(@words, 3%);
    }
  }
}
</style>