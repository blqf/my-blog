<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./index";
export default {
  components: {
    Empty,
  },
};
</script>

<style scoped>
.test-container {
  width: 600px;
  height: 400px;
  border: 1px solid #000;
  margin: 0 auto;
  position: relative;
}
</style>