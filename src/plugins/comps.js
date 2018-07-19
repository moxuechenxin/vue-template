/**
 * 注册全局组件
 */
import Utils from '@/utils'

const comps = Utils.requireAll(require.context('@/components', true, /\.vue$/), 'array')

export default {
  install (Vue, options) {
    comps.forEach(item => {
      const comp = item.export
      if (comp.global) { // 注册全局组件
        Vue.component(comp.name, comp) // 以组件的name为注册组件的名称
      }
    })
  }
}
