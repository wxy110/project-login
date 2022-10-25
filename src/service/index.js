// 把我们的axios配置好
// 1.拦截器
// 2.代理
// 3.baseUrl
// 4.授权的头部字段
const DEV_URL = 'http://127.0.0.1:8082/'
//const PRODUCTION_URL = 'http://www.baidu.com/'


import axios from 'axios'

const http = axios.create({
    baseURL: DEV_URL
})

// 添加请求拦截器
// 为所有的请求带上身份认证信息
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers['token'] = 'token'
    console.log(config.headers)
    // 一定要return config
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default http 