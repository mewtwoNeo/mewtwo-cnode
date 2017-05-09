/**
 * Created by dengchongjing on 2017/3/2.
 */
import * as types from '../types'
import {getTopics, getTopicId} from '@/api'

const state = {
  now: {
    list: [],
    pageNo: 1,
    num: 0
  },
  all: {
    list: [],
    pageNo: 1,
    num: 0
  },
  ask: {
    list: [],
    pageNo: 1,
    num: 0
  },
  share: {
    list: [],
    pageNo: 1,
    num: 0
  },
  job: {
    list: [],
    pageNo: 1,
    num: 0
  },
  good: {
    list: [],
    pageNo: 1,
    num: 0
  },
  active: 'all',
  article: {}
}

const actions = {
  [types.GET_TOPICS] (context, payload) {
    getTopics(...payload).then(data => { context.commit(types.GET_TOPICS, data.data) })
  },
  [types.GET_TOPIC_ID] (context, id) {
    getTopicId(id).then(data => { context.commit(types.GET_TOPIC_ID, data.data) })
  }
}

const mutations = {
  [types.GET_TOPICS] (state, list) {
    // 合并数组
    state.list.push.apply(state.list, list)
  },
  [types.GET_TOPIC_ID] (state, article) {
    state.article = article
  }
}

export default {
  state,
  mutations,
  actions
}
