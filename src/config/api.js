var devMode = process.env.FAST_H5PLUS_NODE_ENV == 'development';

import api_dev1 from './api_dev1' // 成员1定义的api

export default {
    'env': devMode,
    ...api_dev1,
}