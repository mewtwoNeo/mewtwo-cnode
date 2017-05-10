/**
 * Created by dengchongjing on 2017/3/2.
 */
import * as types from '../types'
import {getTopics, getTopicId} from '@/api'

const state = {
  now: {
    list: [],
    pageNo: 0
  },
  all: {
    list: [],
    pageNo: 0
  },
  ask: {
    list: [],
    pageNo: 0
  },
  share: {
    list: [],
    pageNo: 0
  },
  job: {
    list: [],
    pageNo: 0
  },
  good: {
    list: [],
    pageNo: 0
  },
  active: 'all',
  article: {}
}

const actions = {
  getTopics ({commit}, payload) {
    commit(types.UPDATE_TOPICS_PAGENO)
    getTopics(...payload).then(data => { commit(types.GET_TOPICS_DATA, data.data) })
  },
  changeTopicsType ({commit}, topicsType = 'all') {
    commit(types.UPDATE_TOPICS_TYPE, topicsType)
    commit(types.UPDATE_TOPICS)
  },
  fetchTopic (context, id) {
    getTopicId(id).then(data => { context.commit(types.GET_TOPIC_DATA, data.data) })
  }
}

const mutations = {
  // 切换当前主题列表类型
  [types.UPDATE_TOPICS_TYPE] (state, topicsType) {
    state.active = topicsType
  },
  // 更新当前主题列表的页数
  [types.UPDATE_TOPICS_PAGENO] (state) {
    state[state.active].pageNo += 1
  },
  // 获取列表数据
  [types.GET_TOPICS_DATA] (state, list) {
    // 合并数组
    state[state.active].list.push.apply(state[state.active].list, list)
  },
  // 切换当前主题列表数据
  [types.UPDATE_TOPICS] (state) {
    state.now = state[state.active]
  },
  [types.GET_TOPIC_DATA] (state, article) {
    state.article = article
  }
}

export default {
  state,
  mutations,
  actions
}
