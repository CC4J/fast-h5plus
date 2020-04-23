// 用来自动创建页面中需要的.js 与.vue 文件，基于src/pages/template 下的 .js .vue 文件
const fs = require('fs')
const path = require('path')
const PageSet = require('./config/page_set.json') // 页面配置集合

// 生成页面对应的js文件
function createTemplateJs(dst) {
    return `import 'src/public/css/reset.css';
    import 'src/public/css/mui.min.css';
    import 'src/public/js/hotcss.js';
    
    import Vue from 'vue';
    import Template from './${dst}.vue';
    
    import Vant from 'vant';
    import 'vant/lib/index.css';
    
    Vue.use(Vant);
    
    import api from 'src/config/api';
    
    if (api.env) {
        const VConsole = require('vconsole');
        new VConsole();
    }
    
    
    Vue.config.productiontip = !api.env;
    
    new Vue({
        el: '#app',
        components: {
            Template
        },
        template: '<Template/>'
    });
    `
}

function copy(dst, title) {
    // 获取模板vue文件的路径
    let tempVueSrc = path.join(__dirname, 'src', 'pages', 'template', 'template.vue');
    // 定义新增页面js，vue文件的路径
    let dstJsSrc = path.join(__dirname, 'src', 'pages', dst, `${dst}.js`);
    let dstVueSrc = path.join(__dirname, 'src', 'pages', dst, `${dst}.vue`);

    // 创建文件夹
    fs.mkdirSync(path.join(__dirname, `src/pages/${dst}`));

    // 复制并创建页面的vueS文件
    fs.writeFileSync(dstVueSrc, fs.readFileSync(tempVueSrc));

    // 生成js文件内容
    let pageJs = createTemplateJs(dst)
    fs.writeFileSync(dstJsSrc, pageJs)

    // 覆盖新的页面配置文件
    let pageSetSrc = path.join(__dirname, 'config/page_set.json')
    PageSet.page_set.push({
        title,
        filename: dst
    })
    fs.writeFileSync(pageSetSrc, JSON.stringify(PageSet))

    console.log(`${title}页面创建成功,文件路径:src/pages/${dst}`)
}

copy(process.argv[2], process.argv[3])