/**
 * Created by dengchongjing on 2017/3/6.
 */
/**
 * @description 封装util类
 */
class Utils {
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
    function getzf (num) { // 给个位数字加0
      if (parseInt(num) < 10) {
        num = '0' + num
      }
      return num
    }
    const oDate = new Date(str)
    const oYear = oDate.getFullYear()
    const oMonth = oDate.getMonth() + 1
    const oDay = oDate.getDate()
    const oHour = oDate.getHours()
    const oMinute = oDate.getMinutes()
    return oYear + format + getzf(oMonth) + format + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMinute)
  }

  /**
   * @description 日期格式化方法 年月日
   * @param {string} str 需要格式化的时间戳
   * @param {string} format 风格日期的字符，如：'-' '.'
   */
  YYYYMMDD (str, format) {
    /**
     * @description 给个位数字加0
     * @param {number} num 需要加0的数字
     */
    function getzf (num) { // 给个位数字加0
      if (parseInt(num) < 10) {
        num = '0' + num
      }
      return num
    }
    const oDate = new Date(str)
    const oYear = oDate.getFullYear()
    const oMonth = oDate.getMonth() + 1
    const oDay = oDate.getDate()
    return oYear + format + getzf(oMonth) + format + getzf(oDay)
  }

  /**
   * @description 日期格式化方法 月日
   * @param {string} str 需要格式化的时间戳
   * @param {string} format 风格日期的字符，如：'-' '.'
   */
  MMDD (str, format) {
    /**
     * @description 给个位数字加0
     * @param {number} num 需要加0的数字
     */
    function getzf (num) { // 给个位数字加0
      if (parseInt(num) < 10) {
        num = '0' + num
      }
      return num
    }
    const oDate = new Date(str)
    const oMonth = oDate.getMonth() + 1
    const oDay = oDate.getDate()
    return getzf(oMonth) + format + getzf(oDay)
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
}

/**
 * @description 暴露出Util类的实例
 */
export default new Utils()
