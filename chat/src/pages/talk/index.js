
// require('babel-register')


const engine = require('./agora/index')

function join () {
  engine.join({ channel: 'abcd', uid: Math.floor(new Date().getTime() / 1000) })
}

function init () {
  document.querySelector('')
}

join()

