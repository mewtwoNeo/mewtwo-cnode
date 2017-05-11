/**
 * Created by dengchongjing on 2017/3/2.
 */
import { fetch } from '@/plugins/http'
import API_TYPE from './config'

// 获取主题首页
export const getTopics = (page = 1, tab = 'all', limit = 10, mdrender = true) => {
  return fetch(API_TYPE.get_topics, {
    params: {
      page,
      tab,
      limit,
      mdrender
    }
  })
}

// 获取主题详情
export const getTopic = (id, mdrender = true) => {
  return fetch(`${API_TYPE.get_topic_id}/${id}?mdrender=${mdrender}`)
}

// 验证 accessToken 的正确性
export const checkAccesstoken = (accesstoken) => {
  return fetch(API_TYPE.post_accesstoken_check, {
    type: 'post',
    data: {
      accesstoken
    }
  })
}
