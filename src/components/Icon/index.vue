<template>
  <i class="icon-container iconfont" :class="confClass"></i>
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconfl-xinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconqq",
  arrowUp: "icontubiaozhizuo-1",
  arrowDown: "icontubiaozhizuo-",
  empty: "iconempty",
  chat: "iconliuyan",
};

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    confClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2505557_py5r4j4zuci.css";
.iconfont{
  color: inherit;
  font-size: inherit;
}
</style>