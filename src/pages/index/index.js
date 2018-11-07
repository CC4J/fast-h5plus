import 'src/public/css/mui.min.css';
import 'src/public/js/hotcss.js';
import Vue from 'vue';
import Index from './index.vue';
import api from 'src/config/api';
if (api.env) {
	const  VConsole = require('vconsole');
	new VConsole();
}
Vue.config.productiontip = !api.env;

new Vue({
	el: '#app',
	components: {
		Index
	},
	template: '<Index/>'
});



