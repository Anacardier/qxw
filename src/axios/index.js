import axios from 'axios';
import qs from 'qs';

const url = '';

let Http = axios.create({
  baseURL: url,
  timeout: 30000,
  headers: {
    "Content-Type": 'application/x-www-form-urlencoded',
  }
})
// 添加请求拦截器
Http.interceptors.request.use(async (res) => {
  // 添加公共数据
  let _params = {

  }

  if(res.method == 'post') {
    let data = qs.parse(res.data);
    let dataObj = qs.stringify({
      ...data,
      ..._params
    })
    res.data = dataObj
  } else if(res.method == 'get') {
    let dataObj = {
      ...res.data,
      ..._params
    }
    res.params = dataObj;
  }
  return res;
}, (error) => {
  return Promise.reject(error);
})

// 添加响应拦截器
Http.interceptors.response.use(async (response) => {
  // 处理响应数据
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default Http;