/* 公用文件 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

const app = new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})

