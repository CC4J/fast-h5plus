<template>
  <div class="template-page">
    <heador>模板</heador>
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
import Heador from "src/components/Header/Header.vue";
import formatSearch from "src/util/formatSearch.js";
window.mui = mui;
export default {
  components: {
    Heador
  },
  data() {
    return {
      params: {} // 用来接收上一个页面传递过来的参数
    };
  },
  methods: {},
  created() {
    // 获取上个页面传递过来的参数（url传参）
    this.params = formatSearch();

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


