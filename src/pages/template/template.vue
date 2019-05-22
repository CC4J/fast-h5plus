<template>
    <div>
        <heador>首页</heador>
        <div class="mui-content"></div>
    </div>
</template>

<script>
import Heador from "src/components/header/header.vue";
import mui from "src/public/js/mui.min.js";
window.mui = mui;
export default {
    components: {
        Heador
    },
    methods: {},
    created() {
        mui.init({
            swipeBack: true //启用右滑关闭功能
        });
        mui.plusReady(() => {});
    }
};
</script>

<style lang="scss" scoped>
.title {
    height: 400px;
    background: #e4e4e4;
    padding: 30px;
    p {
        color: #666;
        font-size: 36px;
    }
}
</style>


