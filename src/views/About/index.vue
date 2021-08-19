<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe
      class="about-content"
      :src="data"
      frameborder="0"
      @load="srcLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaded: false,
    };
  },
  computed: {
    ...mapState("about", ["data", "loading"]),
  },
  async created() {
    await this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
