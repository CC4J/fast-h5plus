// api 根路径配置

const apiRoot = {
    // 公司阿里云开发环境
    dev: {
        javaIP: '',
        phpIP: ''
    },
    // 个人的开发环境
    pp1Dev: {
        javaIP: '',
        phpIP: ''
    },
    pp2Dev: {
        javaIP: '',
        phpIP: ''
    },
    pp3Dev: {
        javaIP: '',
        phpIP: ''
    },
    pp4Dev: {
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
