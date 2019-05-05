const digitsRE = /(\d{3})(?=\d)/g

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
// 时间格式化
export const formatDate = (date, fmt) => {
  if (!fmt) {
    fmt = "yyyy-MM-dd   hh:mm:ss"
  }
  date = new Date(date)

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, date.getFullYear() + '').substr(4 - RegExp.$1.length)
  }

  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}


// 货币格式化
export function currency(value, currency, decimals) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '￥'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals ?
    stringified.slice(0, -1 - decimals) :
    stringified
  var i = _int.length % 3
  var head = i > 0 ?
    (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) :
    ''
  var _float = decimals ?
    stringified.slice(-1 - decimals) :
    ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}