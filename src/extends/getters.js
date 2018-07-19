import Vue from 'vue'

const getterMaker = function (getVal, defaultVal) {
  return {
    get: (() => {
      let vm = new Vue({
        data: {
          data: null
        }
      })
      return () => {
        if (vm.data === null) {
          getVal((val) => {
            vm.data = val
          })
        }
        return vm.data === null ? defaultVal : vm.data
      }
    })()
  }
}

export default Object.defineProperties({}, {
  author: getterMaker((syncData) => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('zhengjitf')
      }, 2000)
    }).then(data => {
      syncData(data)
    })
  })
})
