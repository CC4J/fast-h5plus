// 配置开始时需要监听的页面
exports.devPage = 'login';
// exports.devPage = 'mall2';

const ccPages = require('./pages/ccPage')
const lxwPages = require('./pages/lxwPage')
const xzdPages = require('./pages/xzdPage.js')

// 定义webpack配置文件中的入口以及HtmlWebpackPlugin所需要的参数
exports.pageSet = [{
  title: '模板',
  filename: 'template'
},
...ccPages,
...lxwPages,
...xzdPages
]