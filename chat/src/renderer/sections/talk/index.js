
require('babel-register')

const engine = require('../../plugins/agora')

function join () {
  engine.join({ channel: 'abcd', uid: Math.floor(new Date().getTime() / 1000) })
}

function init () {
  document.querySelector('')
}

join()
