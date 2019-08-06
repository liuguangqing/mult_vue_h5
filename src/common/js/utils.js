// 判断对象数据类型
const _toString = Object.prototype.toString
export const isObject = data => {
  if (_toString.call(data) === '[object Object]') return true
}

/**
 * 日期时间格式化
 * @param {date} time js的date类型或时间戳
 * @param {string} format 自定义时间格式，选填，默认为'{y}-{m}-{d} {h}:{i}:{s}'
 * @return {string} 默认格式 2018-09-01 10:55:00
 */
export function formatDateTime(time, format) {
  if (!time) {
    return 'null'
  }
  format = format || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

/**
 * 防抖
 * @param {function} fn 需要被防抖的函数
 * @param {number} delay 防抖延时
 */
export function debounce(fn, delay) {
  let timeId = null
  return function() {
    const args = arguments
    timeId && clearTimeout(timeId)
    timeId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
