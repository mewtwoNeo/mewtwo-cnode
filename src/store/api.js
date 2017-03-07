/**
 * Created by dengchongjing on 2017/3/2.
 */
import axios from 'axios'

// 域名
const HOST = 'https://cnodejs.org/api/v1'

export const API_TYPE = {
  topic: {
    // 主题首页
    get_topics: '/topics',
    // 主题详情
    get_topic_id: '/topic'
  }
}

// get方法封装
export function get (url) {
  console.log(url)
  return axios.get(HOST + url).then(response => response.data)
}

// 获取主题首页
export function getTopics (page = 1, tab = 'all', limit = 10, mdrender = true) {
  return get(`${API_TYPE.topic.get_topics}?page=${page}&tab=${tab}&limit=${limit}&mdrender=${mdrender}`)
}

// 获取主题详情
export function getTopicId (id, mdrender = true) {
  return get(`${API_TYPE.topic.get_topic_id}/${id}?mdrender=${mdrender}`)
}
