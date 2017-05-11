/**
 * Created by dengchongjing on 2017/5/11.
 */
import * as types from '../types'
import { getTopic } from '@/api'

const state = {
  article: {}
}

const actions = {
  getTopic ({commit}, id) {
    getTopic(id).then(data => { commit(types.UPDATE_TOPIC_DATA, data.data) })
  }
}

const mutations = {
  // 更新当前文章
  [types.UPDATE_TOPIC_DATA] (state, article) {
    state.article = article
  }
}

export default {
  state,
  mutations,
  actions
}
