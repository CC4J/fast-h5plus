import 'src/public/css/reset.css';
import 'src/public/css/mui.min.css';
import 'src/public/js/hotcss.js';

import Vue from 'vue';
import Template from './template.vue';

import api from 'src/config/api';

if (api.env) {
	const  VConsole = require('vconsole');
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



