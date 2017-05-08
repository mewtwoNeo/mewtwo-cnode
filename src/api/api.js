/**
 * Created by dengchongjing on 2017/3/2.
 */
import axios from 'axios'
import API_TYPE from './config'

// 如果需要代理，加上这层路径
// const proxy = '/proxy'


// get方法封装
export function get (url) {
  console.log(url)
  return axios.get(HOST + url).then(response => response.data)
}

// 获取主题首页
export function getTopics (page = 1, tab = 'all', limit = 10, mdrender = true) {
  return get(`${API_TYPE.get_topics}?page=${page}&tab=${tab}&limit=${limit}&mdrender=${mdrender}`)
}

// 获取主题详情
export function getTopicId (id, mdrender = true) {
  return get(`${API_TYPE.get_topic_id}/${id}?mdrender=${mdrender}`)
}
