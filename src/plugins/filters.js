/**
 * 注册全局过滤器
 */
import Utils from '@/utils'

// 引入所有filter文件
const filtersMap = Utils.requireAll(require.context('@/filters', false, /(?<!index)\.js$/))

export default {
  install (Vue, options) {
    Object.keys(filtersMap).forEach(name => {
      const handler = filtersMap[name]
      Vue.filter(name, handler)
    })
  }
}
