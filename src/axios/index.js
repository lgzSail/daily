import axios from 'axios'

axios.defaults.timeout = 5000
// axios.defaults.baseURL = ''

axios.interceptors.response.use(res => {
  return res.data
})

// 接口
const AxiosList = {
  getTianqi: () => {
    const obj = {
      method: 'get',
      url: `//tianqiapi.com/api?version=v6&appid=61857717&appsecret=iq7P1v5B`,
      headers: {
        'content-type': 'application/json'
      }
    }
    return axios(obj)
  }
}

export default AxiosList
