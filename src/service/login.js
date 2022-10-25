import http from './index'

function loginService( username, password) {
    return http.get(`/login`,null, {params:{username,password}});
  
}

export {
    loginService
} 