export const interceptReqSuccess = (config) => {
  // Do something before request is sent
  return config
}
export const interceptReqFail = (error) => {
  // Do something with request error
  return Promise.reject(error)
}

export const interceptResSuccess = (response) => {
  // Do something before request is sent
  return response
}
export const interceptResFail = (error) => {
  // Do something with request error
  return Promise.reject(error)
}
