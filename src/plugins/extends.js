/**
 * 为Vue和Vue实例添加扩展属性和方法（以$_作为前缀）
 */

import Utils from '@/utils'

const extendsMap = Utils.requireAll(require.context('@/extends', false, /(?<!index)\.js$/))

export default {
  install (Vue, options = {}) {
    const props = {}
    Object.keys(extendsMap).forEach(extendName => {
      const extend = extendsMap[extendName]
      props[`$_${extendName}`] = {
        value: extend
      }
    })

    Object.defineProperties(Vue, props)
    Object.defineProperties(Vue.prototype, props)
  }
}
