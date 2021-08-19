<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">left contentleft contentleft contentleft content</div>
      </template>
      <div class="main">
        mainmainmainmainmainmainmainmainmainmain
        mainmainmainmainmainmainmainmainmainmainmain
        mainmainmainmainmainmainmainmainmainmainmain
        mainmainmainmainmainmainmainmainmainmainmain
        mainmainmainmainmainmainmainmainmainmainmain
        mainmainmainmainmainmainmainmainmainmainmain
        mainmainmainmainmainmainmainmainmainmainmainmainmainmain
      </div>
      <template #right>
        <div class="right">right</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped>
.test-container {
  width: 80%;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
  white-space: nowrap;
}
.left {
  width: 200px;
  height: 100%;
  background-color: lightseagreen;
}
.main {
  width: 100%;
  height: 100%;
  background-color: lightsalmon;
}
.right {
  width: 200px;
  height: 100%;
  background-color: lightgray;
}
</style>