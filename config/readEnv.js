const fs = require('fs')
const path = require('path')

// 读取环境变量的文件并将其转换成对象
module.exports = (file) => {
    let fileName = path.join(__dirname, file);
    let data = fs.readFileSync(fileName, { encoding: 'utf8' })
    let d = data.replace(/\r/g, ',').replace(/\n/g, ',') // 把换行和回车替换
    let arr = d.split(',').map(item => {
        return item.split('=')
    }) // [ [ 'a', '1' ], [ 'b', '2' ] ]
    let obj = {}
    arr.forEach(item => {
        obj['FAST_H5PLUS_' + item[0]] = JSON.stringify(item[1])
    })
    return obj
}