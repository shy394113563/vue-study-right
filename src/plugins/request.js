import axios from 'axios'
//封装axios
const service = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 15000,
})

//axios的拦截request
service.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.header.token = localStorage.getItem('token')
  }
  return config
}),
  (err) => {
    Promise.reject(err)
  }

//axios的拦截response
service.interceptors.response.use((response) => {
  if (response.data.code === 200) {
    console.log('请求成功')
  }
  return response
}),
  (err) => {
    Promise.reject(err)
  }

export default service
