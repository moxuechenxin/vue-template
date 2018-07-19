import Vue from 'vue'
import Router from 'vue-router'
import Utils from '@/utils'
Vue.use(Router)

// 引入所有模块的router.js配置文件
const allRoutersMap = Utils.requireAll(require.context('@/routers/', false, /(?<!(module|index))\.js$/))
const allRouters = Object.keys(allRoutersMap).reduce((total, currKey, index) => {
  const currVal = allRoutersMap[currKey]
  return total.concat(currVal)
}, [])

const router = new Router({
  routes: [
    ...allRouters
  ]
})

export default router
