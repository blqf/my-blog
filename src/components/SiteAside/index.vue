<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :size="130" :url="data.avatar" />
      <h1 class="title">{{ data.siteTitle }}</h1>
    </template>
    <Menu />
    <Contact v-if="data" />
    <p v-if="data" class="footer">
      {{ data.icp }}
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background-color: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
  transition: all 800ms linear;
  &:hover {
    transform: rotateZ(360deg);
  }
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
.footer {
  text-align: center;
  font-size: 12px;
}
</style>