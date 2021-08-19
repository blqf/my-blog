<template>
    <div class="test-container">
        <Loading v-if="show" />
        <button @click="handleClick">显示/隐藏</button>
    </div>
</template>

<script>
import Loading from './index';
export default {
    components: {
        Loading
    },
    data() {
        return {
            show: true
        }
    },
    methods: {
        handleClick() {
            this.show = !this.show;
        }
    }
}
</script>

<style scoped>
.test-container{
    width: 500px;
    height: 300px;
    border: 1px solid #000;
    margin: 0 auto;
    position: relative;
}
</style>