import { request } from 'resource/js/axios'

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

export function fileSendPost (params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 300)
  })
}
