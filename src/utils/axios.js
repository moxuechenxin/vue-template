import axios from 'axios'
import {
  interceptReqSuccess,
  interceptReqFail,
  interceptResSuccess,
  interceptResFail
} from '@/config/interceptors/axios'
import getType from '@/utils/getType'
import serialize from '@/utils/serialize'

// 默认配置
const instance = axios.create({
  timeout: 15000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

// 请求数据转换（PUT, POST, and PATCH）
instance.defaults.transformRequest.unshift((data, headers) => {
  // 序列化Content-Type为application/x-www-form-urlencoded的data参数
  if (getType(data) === 'object') {
    const ContentType = headers['Content-Type'] || headers['content-type']
    if (!ContentType || ContentType.indexOf('application/x-www-form-urlencoded') !== -1) {
      data = serialize(data)
    }
  }

  return data
})

// 响应数据转换
instance.defaults.transformResponse.push((data) => {
  // Do whatever you want to transform the data

  return data
})

// 拦截器
instance.interceptors.request.use(interceptReqSuccess, interceptReqFail)
instance.interceptors.response.use(interceptResSuccess, interceptResFail)

export default instance

export const fetchApi = (options = {}) => {
  return instance(options)
}
