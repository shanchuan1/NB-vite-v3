import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'
import { setLocal } from "@/request/api";


axios.defaults.baseURL = '//backend-api-01.newbee.ltd/api/v1'    //如baseurl出错这里请求是本地的http://localhost:8081
// axios.defaults.baseURL = '/api'  
  
//只要用axios进行接口请求的，都可以在请求头里面携带cookie或者authorization headers
axios.defaults.withCredentials = true 
axios.defaults.headers['X-requested-With'] = 'XMLHttpRequest'

// 配置cookie请求头每次请求进行携带   后端设置了只有首页与分类页请求可以不携带请求头 返回resultCode=200 其他返回resultCode=416
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'


// 请求拦截器
axios.interceptors.request.use(config => {
    return config
}), err => {
    return Promise.reject(err)
}

// 响应拦截器
axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        Toast.fail('服务端异常！')
        return Promise.reject(res)
      }
      if (res.data.resultCode != 200) {
        if (res.data.message) Toast.fail(res.data.message); 
        // 判断当且路由路径不是home与category且请求返回的 resultCode==416 表示用户未登录 跳转至登录页面 
        if (res.data.resultCode == 416 && router.currentRoute.value.path !== '/home' && router.currentRoute.value.path !== '/category') {
          router.push({ path: '/login' })
        }
        
        if (res.data.data && router.currentRoute.value.path == '/login') {
          setLocal('token', res.data.data)
          axios.defaults.headers['token'] = res.data.data
        }
    
        return Promise.reject(res.data)
      }

    return res.data
    // return res  或者
}), err => {
    return Promise.reject(err)
}

export default axios



