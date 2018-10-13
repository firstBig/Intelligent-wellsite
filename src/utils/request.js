import axios from 'axios'
import { Message } from 'element-ui'
// import store from '../store'
import { getToken } from '@/utils/token'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      // if (store.getters.token) {
      config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {console.log(response)
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 0) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })

      // public static CodeMsg 请求成功 = new CodeMsg(0, "请求成功");
      // public static CodeMsg 参数不正确 = new CodeMsg(400, "参数不正确");
      // public static CodeMsg 需要登录 = new CodeMsg(401, "需要登录");
      // public static CodeMsg 用户已存在 = new CodeMsg(402, "用户已存在");
      // public static CodeMsg 无权限 = new CodeMsg(403, "无权限");
      // public static CodeMsg 用户名密码错误 = new CodeMsg(405, "用户名密码错误");
      // public static CodeMsg 验证码不正确 = new CodeMsg(406, "验证码不正确");
      // public static CodeMsg 用户未激活 = new CodeMsg(407, "用户未激活");
      // public static CodeMsg 内部错误 = new CodeMsg(500, "内部错误");
      // public static CodeMsg 获取数据异常 = new CodeMsg(501, "获取数据异常");

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   MessageBox.confirm(
      //     '你已被登出，可以取消继续留在该页面，或者重新登录',
      //     '确定登出',
      //     {
      //       confirmButtonText: '重新登录',
      //       cancelButtonText: '取消',
      //       type: 'warning'
      //     }
      //   ).then(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       location.reload() // 为了重新实例化vue-router对象 避免bug
      //     })
      //   })
      // }
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
