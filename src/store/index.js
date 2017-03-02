/**
 * Created by dengchongjing on 2017/3/2.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import cnode from './modules/cnode'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cnode
  }
})
