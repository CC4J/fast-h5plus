<template>
    <div>
        <heador>h5-模板</heador>
        <div class="mui-content"></div>
    </div>
</template>

<script>
import Heador from "src/components/header/header.vue";
import formatSearch from "src/util/formatSearch.js";
import mui from "src/public/js/mui.min.js";
window.mui = mui;
export default {
    components: {
        Heador
    },
    data() {
        params: {
        } // 用来接收上一个页面通过url传递过来的参数
    },
    methods: {},
    created() {
        // 获取上个页面传递过来的参数
        this.params = formatSearch();

        mui.init({
            swipeBack: true //启用右滑关闭功能
        });

        // app环境下需要配分享参数，一下是默认参数，请不需删除这段代码
        mui.plusReady(() => {
            if (plus) {
                var ws = plus.webview.currentWebview();
                ws.setShareOptions({
                    title: document.title,
                    href: window.location.href,
                    icon: ""
                });
            }
        });
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


