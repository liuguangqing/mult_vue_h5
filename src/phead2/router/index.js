import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    //主页
    {
      path: '/',
      name: 'Index',
      component: () => import('../pages/index'), // 好友代付,
    },
  ]
})
