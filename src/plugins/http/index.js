const Promise = require('es6-promise').Promise
const http = {}

/**
 * 通用请求方法封装
 * 返回Promise实例
 */
export function request (options) {
  if (typeof options !== 'object') return

  return new Promise(function (resolve, reject) { 
    $.ajax({
      url: options.url,
      type: options.type || 'GET',
      dataType: options.dataType || 'json',
      data: options.data || {},
      timeout: options.timeout || '8000',
      success: function (res, textStatus, xhr) {
        if (res.code === 0) {
          resolve(res)
        } else if (res.success) {
          resolve(res)
        } else {
          reject(res)
        }
      },
      error: function (xhr, textStatus, errorThrown) {
        reject({ 'code': '-100', 'message': '网络异常请稍后再试！' })
      }
    })
  })
}


http.install = function (Vue) {
  // 通用
  Vue.prototype.http = function (options) {
    return request(options)
  }

  // jsonp
  Vue.prototype.jsonp = function (options) {
    options.dataType = 'jsonp'
    return request(options)
  }
}

// jsonp
export const jsonp = (options) => {
  options.dataType = 'jsonp'
  return request(options)
}


export default http




