<template>
  <div class="test-container">
    <Icon type="home" />
    <Icon type="success" />
    <Icon type="qq" />
  </div>
</template>

<script>
import Icon from "./index";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped>
.test-container{
  display: flex;
  justify-content: center;
}
</style>