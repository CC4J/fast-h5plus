// api 根路径配置

const apiRoot = {
    // 公司阿里云开发环境
    dev: {
        javaIP: 'http://x.x.x.x:3000/api/',
        phpIP: 'http://x.x.x.x:3000/api/'
    },
    // 个人的开发环境
    oneDev: {
        javaIP: '',
        phpIP: ''
    },
    twoDev: {
        javaIP: '',
        phpIP: ''
    },
    // 正式阿里云环境
    prod: {
        javaIP: 'http://x.x.x.x:3000/api/',
        phpIP: 'http://x.x.x.x:3000/api/'
    }
}

export default apiRoot.prod;
