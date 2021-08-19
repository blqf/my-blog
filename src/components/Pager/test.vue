<template>
  <div id="test-container">
    <Pager
      :current="current"
      :total="1000"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "./index.vue";
export default {
  name: "App",
  components: {
    Pager,
  },
  data() {
    return {
      current: 9,
    };
  },
  methods: {
    handlePageChange(newPage) {
      console.log(newPage);
      this.current = newPage;
    },
  },
};
</script>
