import 'src/public/css/mui.min.css';
import 'src/public/js/hotcss.js';
import Vue from 'vue';
import List from './list.vue';
import api from 'src/config/api';

if (api.env) {
	const  VConsole = require('vconsole');
	new VConsole();
}

Vue.config.productiontip = !api.env;

new Vue({
	el: '#app',
	components: {
		List
	},
	template: '<List/>'
});



