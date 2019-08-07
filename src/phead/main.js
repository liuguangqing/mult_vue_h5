/* 公用文件 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

const app = new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})

