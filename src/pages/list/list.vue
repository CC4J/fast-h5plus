<template>
  <div>
    <heador :back="true">列表</heador>
    <!-- 下拉刷新容器 -->
    <div id="pullrefresh" class="mui-content">
        <ul class="mui-table-view" style="margin-top: 0;">
          <li @click="tapItem(news.id)" v-for="news in list" :key="news.id" class="mui-table-view-cell">
            <p>标题：{{news.title}}</p>
            <p>时间：{{news.createTime | formatDate}}</p>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import Heador from 'src/components/header/header.vue';
import mui from 'src/public/js/mui.min.js';
import api from 'src/config/api.js';
import http from 'src/util/request.js';
import { formatDate } from 'src/util/util.js';

export default {
  components: {
    Heador
  },
  data () {
    return {
      list: []
    }
  },
  filters: {
    formatDate
  }, 
  methods: {
    tapItem (id) { // 点击事件
      mui.openWindow({
        url: './listDetail.html',
        id: 'listDetail',
        extras: {
          newsId: id
        }
      })
    },
    getData (index, count) { // 获取数据
      return http({
        url: api.selectAppNotice,
        data: {
          userId: '36632e88-0ba7-4656-a7ff-fa2a4246d565',
          communityId: 1,
          dataIndex: index,
          pageCount: count
        }
      });
    },
    pulldownRefresh () { // 下拉刷新
      var that = this;
      this.getData(0, 10)
      .then(data => {
        that.list = [];
        if (data.result == 0) {
          mui.toast('网络连接异常');
        }else {
          that.list = data.list;
        }
      })
      .catch(err => {
        mui.toast('网络连接异常');
      })
      .then(() => {
          setTimeout(() => {
            mui('#pullrefresh').pullRefresh().endPulldown();
            mui('#pullrefresh').pullRefresh().refresh(true);
          }, 1000);
      });
    },
    pullupRefresh () { // 上拉加载
      var that = this;
      var idx = this.list.length || 0;
      var flag = false;
      this.getData(idx, 10)
      .then(data => {
        if (data.result == 0) {
          mui.toast('网络连接异常');
        }else {
          data.list.map(item => {
            that.list.push(item);
          });
          if (data.list.length < 10) {
            flag = true;
          }
        }
      })
      .catch(err => {
        mui.toast('网络连接异常');
      })
      .then(() => {
          setTimeout(() => {
            mui('#pullrefresh').pullRefresh().endPullup(flag);
          }, 1000);
      });
    }
  },
  mounted () {
    this.$nextTick(() => {
      mui.init({
				pullRefresh: {
					container: '#pullrefresh',
					down: {
						style:'circle',
						callback: this.pulldownRefresh
					},
					up: {
						auto:true,
						contentrefresh: '正在加载...',
						callback: this.pullupRefresh
					}
				}
			});
    })
  }
}
</script>
