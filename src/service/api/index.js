import axios from '@/utils/axios'

export const test1 = () => {
  return axios({
    method: 'post',
    url: '/test1',
    data: {
      id: 1,
      name: 'oigo'
    }
  })
}
