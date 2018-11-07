// 配置开始时需要监听的页面
exports.devPage = 'index';

// 定义webpack配置文件中的入口以及HtmlWebpackPlugin所需要的参数
exports.pageSet = [
  {title: '首页', filename: 'index'},
  {title: '列表', filename: 'list'},
  {title: '详情', filename: 'listDetail'}
]