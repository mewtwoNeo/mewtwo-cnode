/**
 * Created by dengchongjing on 2017/3/2.
 */
import { fetch } from '@/plugins/http'
import API_TYPE from './config'

// 如果需要代理，加上这层路径
// const proxy = '/proxy'

// 获取主题首页
export function getTopics (page = 1, tab = 'all', limit = 10, mdrender = true) {
  // return fetch(`${API_TYPE.get_topics}?page=${page}&tab=${tab}&limit=${limit}&mdrender=${mdrender}`)
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
export function getTopicId (id, mdrender = true) {
  return fetch(`${API_TYPE.get_topic_id}/${id}?mdrender=${mdrender}`)
}
