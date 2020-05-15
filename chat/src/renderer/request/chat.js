import { request } from '../plugins/axios'

export function userlistGet () {
  return request.get('/user/list')
}

export function usermsgPost () {
  return request.post('user/msg')
}

export function msgSend (params) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve([params, 'yes, ok!'])
    }, 300)
  })
}
