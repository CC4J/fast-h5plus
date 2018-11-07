<template>
  <div>
    <heador :back="true">详情</heador>
    <div class="mui-content">
      <h4>{{newsData.title}}</h4>
      <h5 style="">
        <span>{{ newsData.communityName }}</span>
        &nbsp;&nbsp;
        <span>{{ newsData.createTime | formatDate}}</span>
        <div v-html="newsData.content"></div>
      </h5>
    </div>
  </div>
</template>

<script>
import Heador from 'src/components/header/header.vue';
import mui from 'src/public/js/mui.min.js';
import api from 'src/config/api.js'
import http from 'src/util/request.js';
import {formatDate} from 'src/util/util.js';

export default {
  components: {
    Heador
  },
  data () {
    return {
      newsId: '',
      newsData: {}
    }
  },
  filters: {
    formatDate
  },
  methods: {
    getData () {
      var that = this;
      http({
        url: api.selectAppNoticeById,
        data: {
          id: this.newsId,
          userId: '36632e88-0ba7-4656-a7ff-fa2a4246d565'
        }
      }).then(data => {
        that.newsData = data.appNotice
      }).catch(err => {
        mui.toast('网络连接异常');
      })
    }
  },
  mounted () {
    var that = this;
    this.$nextTick(() => {
      mui.plusReady(() => {
        that.newsId = plus.webview.currentWebview().newsId;
        that.getData();
      })
    });
  }
}
</script>

<style lang="scss">
  img{
    width: 100%!important;
    height: auto;
  }
</style>

<style lang="scss" scoped>
.mui-content{
  h4{
    text-align: center;
    margin:20px 0;
    padding: 0 20px;
  }
  h5{
    padding-left: 15px;
    & > div{
      padding: 10px 15px;
    }
  }
}
</style>

