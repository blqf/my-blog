<template>
    <div class="test-container">
        <SiteAide />
    </div>
</template>

<script>
import SiteAide from './index';
import '@/styles/global.less';
export default {
    components: {
        SiteAide
    }
}
</script>

<style scoped>
.test-container{
    width: 250px;
    height: 600px;
    margin: 10px auto;
}
</style>