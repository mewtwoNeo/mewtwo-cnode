import axios from 'axios'
import store from '../../vuex/'

/**
 * axios 依赖一个原生的 ES6 Promise 实现，
 * 如果你的浏览器环境不支持 ES6 Promises，你需要引入 polyfill
 */
require('es6-promise').polyfill()

// axios 配置
axios.defaults.timeout = 8000

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.log('请求404')
          break
        case 500:
          console.log('请求500')
          break
      }
    }
    console.log(error)
    return Promise.reject({ code: '-100', message: '网络异常请稍后再试！' })
  }
)

// 封装请求
export function fetch (url, options) {
  var opt = options || {}

  return new Promise((resolve, reject) => {
    axios({
      method: opt.type || 'get',
      url: url,
      params: opt.params || {},
      data: opt.data || {},
      responseType: opt.dataType || 'json'
    })
      .then(response => {
        if (response.data.code === 0) {
          resolve(response.data)
        } else if (response.data.success) {
          resolve(response.data)
        } else {
          reject(response.data)
        }
      })
      .catch(error => {
        console.log(error)
        store.commit('SET_LOADING', false)
      })
  })
}

export default axios
