<template>
    <div class="test-container">
        <Avatar url="https://avatars.githubusercontent.com/u/67512290?v=4" />
    </div>
</template>

<script>
import Avatar from "./index";
export default {
  components: {
    Avatar,
  },
};
</script>

<style scoped>
.test-container{
  display: flex;
  justify-content: center;
}
</style>