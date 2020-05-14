import 'src/public/css/reset.css';
import 'src/public/css/mui.min.css';
import 'src/public/js/hotcss.js';

import Vue from 'vue';
import Template from './template.vue';

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

let isDev = process.env.FAST_H5PLUS_NODE_ENV == 'development' ? true : false;

if (isDev) {
	const VConsole = require('vconsole');
	new VConsole();
}

Vue.config.productiontip = !isDev;

new Vue({
	el: '#app',
	components: {
		Template
	},
	template: '<Template/>'
});