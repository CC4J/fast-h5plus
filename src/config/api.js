// var devMode = true;
var devMode = false;

import ccApi from './ccApi'
import lxwApi from './lxwApi'
import xzdApi from './xzdApi'
import otherApi from './otherApi'

export default {
    'env': devMode,
    ...ccApi,
    ...lxwApi,
    ...xzdApi,
    ...otherApi
}