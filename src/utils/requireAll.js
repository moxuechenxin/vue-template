/**
 * 获取引用的所有模块的数据
 * @param requireCtx   require.context调用后返回的对象
 * @param returnType   返回的类型（Object / Array）
 * @returns {object | array}
 */

export default (requireCtx, returnType = 'object') => {
  if (returnType === 'array') {
    return requireCtx.keys().map(relPath => {
      const name = /(\w+)\.\w+$/.exec(relPath)[1]
      const exportDefault = requireCtx(relPath).default
      return {
        name,
        export: exportDefault
      }
    })
  } else {
    const requires = Object.create(null)

    requireCtx.keys().map(relPath => {
      const name = /(\w+)\.\w+$/.exec(relPath)[1]
      const exportDefault = requireCtx(relPath).default
      requires[name] = exportDefault
    })

    return requires
  }
}
