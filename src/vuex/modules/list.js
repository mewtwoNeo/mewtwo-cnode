/**
 * Created by dengchongjing on 2017/3/2.
 */
import * as types from '../types'
import { getTopics } from '@/api'

const state = {
  now: {
    list: [],
    pageNo: 1
  },
  all: {
    list: [],
    pageNo: 1
  },
  ask: {
    list: [],
    pageNo: 1
  },
  share: {
    list: [],
    pageNo: 1
  },
  job: {
    list: [],
    pageNo: 1
  },
  good: {
    list: [],
    pageNo: 1
  },
  active: 'all',
  article: {}
}

const actions = {
  getTopics ({commit}, payload) {
    getTopics(...payload).then(data => {
      // 更新当前主题列表页数
      commit(types.UPDATE_TOPICS_PAGENO)
      commit(types.ADD_TOPICS_DATA, data.data)
    })
  },
  changeTopicsType ({commit}, topicsType = 'all') {
    commit(types.CHECKOUT_TOPICS_TYPE, topicsType)
    commit(types.CHECKOUT_TOPICS)
  }
}

const mutations = {
  // 切换当前主题列表类型
  [types.CHECKOUT_TOPICS_TYPE] (state, topicsType) {
    state.active = topicsType
  },
  // 更新当前主题列表的页数
  [types.UPDATE_TOPICS_PAGENO] (state) {
    state[state.active].pageNo += 1
  },
  // 增加列表数据
  [types.ADD_TOPICS_DATA] (state, list) {
    // 合并数组
    state[state.active].list = state[state.active].list.concat(list)
  },
  // 切换当前主题列表数据
  [types.CHECKOUT_TOPICS] (state) {
    state.now = state[state.active]
  }
}

export default {
  state,
  mutations,
  actions
}
