<template>
    <div class="test-container">
        <Menu />
    </div>
</template>

<script>
import Menu from './index';
import '@/styles/global.less';
export default {
    components: {
        Menu
    }
}
</script>

<style lang="less" scoped>
.test-container{
    width: 400px;
    height: 600px;
    border: 2px solid #f00;
    background-color: #000;
    margin: 0 auto;
}
</style>