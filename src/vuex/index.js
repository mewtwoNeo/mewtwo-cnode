/**
 * Created by dengchongjing on 2017/3/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import article from './modules/article'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list,
    article
  }
})
