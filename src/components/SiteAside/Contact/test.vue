<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./index";
import '@/styles/global.less';
export default {
  components: {
    Contact,
  },
};
</script>

<style scoped>
.test-container {
  width: 400px;
  height: 400px;
  padding-top: 200px;
  border: 2px solid #000;
  background-color: #000;
  margin: 0 auto;
}
</style>