import axios from 'axios'
export const get = (url, payload) => {
  return axios.get(url, {
    baseURL: 'http://localhost:5000',
    params: payload
  })
}
//定义一个post函数
export const post = (url, data) => {

  //封装一个post请求，post请求返回一个promise
  return axios.post(url, data, {
    baseURL: 'https://www.fastmock.site/mock/5510297e42643fa15e6c87bc7e31489e/jingdong',
  })

}
