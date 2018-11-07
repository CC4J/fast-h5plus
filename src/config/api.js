var devMode = true;
var devIP = '/api/'; // 开发环境服务器代理
var prodIP = 'http://47.95.13.22:8080/zhsq_admin/interface/'; // 生产环境

var serverIP = devMode ? devIP : prodIP;

module.exports = {
  'env': devMode,
  'selectAppNotice': serverIP + 'selectAppNotice', // 查询新闻列表
  'selectAppNoticeById': serverIP + 'selectAppNoticeById' // 查询新闻详情
}