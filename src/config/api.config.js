// api 根路径配置

const apiRoot = {
    // 公司阿里云开发环境
    dev: {
        javaIP: '',
        phpIP: ''
    },
    // 个人的开发环境
    ccDev: {
        javaIP: '',
        phpIP: ''
    },
    lxwDev: {
        javaIP: '',
        phpIP: ''
    },
    xzdDev: {
        javaIP: '',
        phpIP: ''
    },
    otherDev: {
        javaIP: '',
        phpIP: ''
    },
    // 正式阿里云环境
    prod: {
        javaIP: '',
        phpIP: ''
    }
}

export default apiRoot.prod;
