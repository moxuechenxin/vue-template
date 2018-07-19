/**
 * 模拟简易请求
 * @param {*}
 */

export default function ({success = true, duration = 1000, res} = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (success) {
        resolve(res)
      } else {
        reject(new Error())
      }
    }, duration)
  })
}
