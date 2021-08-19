<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <div v-for="item in data" :key="item.id" class="project-item">
      <a
        :href="item.url || `javascript:;`"
        :target="item.url ? '_blank' : '_self'"
      >
        <img class="thumb" v-lazy="item.thumb" />
      </a>
      <div>
        <h2>
          <a
            :href="item.url || `javascript:;`"
            :target="item.url ? '_blank' : '_self'"
          >
            {{ item.name }}
            <span v-if="!item.url" class="no-url">该项目无展示地址</span>
          </a>
        </h2>
        <a
          v-if="item.github"
          :href="item.github"
          target="_blank"
          class="github"
        >
          GitHub源码地址
        </a>
        <p>{{ item.description}}</p>
      </div>
    </div>
    <Empty v-if="!data.length && !loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll.js";
import Empty from "@/components/Empty";
export default {
  components: {
    Empty,
  },
  mixins: [mainScroll("projectContainer")],
  computed: {
    ...mapState("project", ["loading", "data"]),
  },
  created() {
    this.$store.dispatch("project/fetchProjects");
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @primary;
  }
  .no-url {
    color: @warn;
    font-size: 16px;
  }
}
</style>