<template>
    <div class="template-page">
        <mui-header>模板</mui-header>
        <!-- 如果页面没有使用mui-header组件，则不需要使用mui-content类 -->
        <div class="mui-content">
            <div class="page-content">
                如果页面需要顶部导航栏，则需要给内容父容器添加.mui-content类，
                该类自动为容器添加padding-top，使内容从导航栏下面开始绘制。
                <br />
                <br />
                <br />若页面没有导航栏，或自定义导航栏，则去掉mui-content类
                <br />
                <br />
                <br />style的px不会转为rem，应对一些特殊场景。
                style.less中的px会转为rem
            </div>
        </div>
    </div>
</template>

<script>
import mui from "src/public/js/mui.min.js";
import api from "src/config/api.js";
import store from "src/store";
import http from "src/util/ajax.js";
import MuiHeader from "src/components/MuiHeader/MuiHeader.vue";
import formatUrlSearch from "src/util/formatUrlSearch.js";
window.mui = mui;
export default {
    components: {
        MuiHeader
    },
    data() {
        return {
            params: {} // 用来接收上一个页面传递过来的参数
        };
    },
    methods: {},
    created() {
        // 获取上个页面传递过来的参数（url传参,非app环境使用，app环境请删掉）
        this.params = formatUrlSearch();

        mui.init();

        // 页面初始化完成回调
        mui.ready(() => {});

        // app环境plus对象初始化完毕
        mui.plusReady(() => {});
    }
};
</script>

<style>
html,
body,
.mui-content {
    background: #fff;
}
</style>

<style lang="less" scoped>
.template-page {
    .page-content {
        padding: 24px;
        font-size: 28px;
        color: #999;
    }
}
</style>


