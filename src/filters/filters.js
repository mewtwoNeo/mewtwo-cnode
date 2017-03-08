/**
 * Created by dengchongjing on 2017/3/6.
 */

/**
 * @description 封装util类
 */
class Utils {

  /**
   * @description 静态方法，给个位数字加0
   * @param {number} num 需要加0的数字
   */
  static getzf (num) { // 给个位数字加0
    if (parseInt(num) < 10) {
      num = '0' + num
    }
    return num
  }

  /**
   * @description 千分位方法，返回字符串
   * @param {Number} num 需要千分位的数字
   */
  thousands (num) {
    return (num + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
  }

  /**
   * @description 日期格式化方法 年月日 时:分
   * @param {string} str 需要格式化的时间戳
   * @param {string} format 风格日期的字符，如：'-' '.'
   */
  YYYYMMDDHHMM (str, format) {
    const oDate = new Date(str)
    const oYear = oDate.getFullYear()
    const oMonth = oDate.getMonth() + 1
    const oDay = oDate.getDate()
    const oHour = oDate.getHours()
    const oMinute = oDate.getMinutes()
    return oYear + format + Utils.getzf(oMonth) + format + Utils.getzf(oDay) + ' ' + Utils.getzf(oHour) + ':' + Utils.getzf(oMinute)
  }

  /**
   * @description 日期格式化方法 年月日
   * @param {string} str 需要格式化的时间戳
   * @param {string} format 风格日期的字符，如：'-' '.'
   */
  YYYYMMDD (str, format) {
    const oDate = new Date(str)
    const oYear = oDate.getFullYear()
    const oMonth = oDate.getMonth() + 1
    const oDay = oDate.getDate()
    return oYear + format + Utils.getzf(oMonth) + format + Utils.getzf(oDay)
  }

  /**
   * @description 日期格式化方法 月日
   * @param {string} str 需要格式化的时间戳
   * @param {string} format 风格日期的字符，如：'-' '.'
   */
  MMDD (str, format) {
    const oDate = new Date(str)
    const oMonth = oDate.getMonth() + 1
    const oDay = oDate.getDate()
    return Utils.getzf(oMonth) + format + Utils.getzf(oDay)
  }
  /**
   * @description 保留两位小数（将浮点数四舍五入，取小数点后2位）
   * @param {number} num 需要传入的数字
   */
  toDecimal (x) {
    let f = parseFloat(x)
    if (isNaN(f)) {
      return
    }
    f = Math.round(x * 100) / 100
    return f
  }

  /**
   * @description 转换主题标签字段
   */
  getTabInfo (tab, good, top, isClass) {
    let str = ''
    let className = ''
    if (top) {
      str = '置顶'
      className = 'top'
    } else if (good) {
      str = '精华'
      className = 'good'
    } else {
      switch (tab) {
        case 'share':
          str = '分享'
          className = 'share'
          break
        case 'ask':
          str = '问答'
          className = 'ask'
          break
        case 'job':
          str = '招聘'
          className = 'job'
          break
        default:
          str = '暂无'
          className = 'default'
          break
      }
    }
    return isClass ? className : str
  }
}

/**
 * @description 暴露出Util类的实例
 */
export default new Utils()

