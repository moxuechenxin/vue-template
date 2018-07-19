/**
 * 序列化字符串
 */
import getType from './getType'

export default (params) => {
  if (getType(params) === 'object') {
    let str = ''
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        if (params[key] !== undefined) {
          str += key + '=' + params[key] + '&'
        }
      }
    }
    params = str.slice(0, -1)
  }
  return params
}
