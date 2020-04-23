// 访问根路径 / 时对应的页面
exports.devPage = 'template';

// 引入页面集合
const PageSet = require('./page_set.json')

// 定义webpack配置文件中的入口以及HtmlWebpackPlugin所需要的参数
exports.pageSet = [
  ...PageSet.page_set
]