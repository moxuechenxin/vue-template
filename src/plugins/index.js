import Utils from '@/utils'

const pluginsMap = Utils.requireAll(require.context('./', false, /(?<!index)\.js$/))

export default {
  install (Vue, options = {}) {
    Object.keys(pluginsMap).forEach(pluginName => {
      const plugin = pluginsMap[pluginName]
      Vue.use(plugin, options[pluginName])
    })
  }
}
