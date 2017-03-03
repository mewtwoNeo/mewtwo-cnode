/**
 * Created by dengchongjing on 2017/3/2.
 */
import * as types from '../types'
import {getTopics, getTopicId} from '../api'

const state = {
  topics: []
}

const actions = {
  [types.GET_TOPICS] (context, payload) {
    getTopics(...payload).then(data => { context.commit(types.GET_TOPICS, data) })
  },

  [types.GET_TOPIC_ID] (context, id) {
    getTopicId(id).then(data => { console.log(data) })
  }

}

const mutations = {
  [types.GET_TOPICS] (state, list) {
    console.log(list)
    state.topics.push(list)
  }
}

export default {
  state,
  mutations,
  actions
}
