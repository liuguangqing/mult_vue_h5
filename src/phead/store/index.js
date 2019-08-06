import Vuex from 'vuex'
import Vue from 'vue'
import agent from '../../../src/common/js/agent'

Vue.use(Vuex)

let ajaxUrl = '/proxy'

export default new Vuex.Store({
  state: {
    count: 0,
    movieList: null,
    pageTitle: '爱上街',
  },
  actions: {
    getBrandsGroupDataAjax({
      state
    }, payload) {
      return agent({
        url: '/proxy/fanbei-web/activity/getBrandChannel',
        method: 'post',
        data: payload
      }).then(res => {
        state.movieList = JSON.stringify(res)
        return res
      })
    },
  }
})
