// var devMode = true;
var devMode = false;

import pp1Api from './pp1Api' // 开发者1负责的api
import pp2Api from './pp2wApi' // 开发者2负责的api
import pp3Api from './pp3Api' // 开发者3负责的api

export default {
    'env': devMode,
    ...pp1Api,
    ...pp2Api,
    ...pp3Api
}