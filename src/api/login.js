import request from '@/utils/request'

//登录
export function login(username, password) {
  return request({
    url: '/auth/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

//发送短信
export function sendCode(mobile) {
  return request({
    url: '/auth/smscode',
    method: 'post',
    data: {
      mobile
    }
  })
}

//注册
export function sign(data) {
  return request({
    url: '/auth/signup',
    method: 'post',
    data
  })
}

//获取用户信息
export function getInfo() {
  return request({
    url: '/auth/info',
    method: 'get'
  })
}

export function weather(location) {
  return request({
    url: '/weather/query/coordinate/'+location,
    method: 'get'
  })
}





