// 配置开始时需要监听的页面
exports.devPage = 'template';

const onePages = require('./pages/onePages')

// 定义webpack配置文件中的入口以及HtmlWebpackPlugin所需要的参数
exports.pageSet = [{
  title: '模板',
  filename: 'template'
},
...onePages
]