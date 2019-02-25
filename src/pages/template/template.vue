<template>
  <div>
    <heador>首页</heador>
    <div class="mui-content">
      <div class="title">
        <p>框架提供webpack多页面APP开发的各项配置</p>
        <p>框架以vue，mui，h5plus为基础，用来开发移动app</p>
        <p>框架使用hotcss方案，解决移动端各类屏幕兼容问题</p>
      </div>
    </div>
    <h5 class="mui-content-padded">示例</h5>
    <ul class="mui-table-view">
				<li @click="tapList" class="mui-table-view-cell">
					<a class="mui-navigate-right">列表</a>
				</li>
    </ul>
  </div>
</template>

<script>
import Heador from 'src/components/header/header.vue';
import mui from 'src/public/js/mui.min.js';

export default {
	components: {
    Heador
  },
  methods: {
    tapList () {
      mui.openWindow({
        url: './list.html',
        id: 'list'
      })
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      mui.init();
    });
  }
}
</script>

<style lang="scss" scoped>
  .title{
    height: 400px;
    background: #e4e4e4;
    padding: 30px;
    p{
      color: #666;
      font-size: 36px;
    }
  }
</style>


