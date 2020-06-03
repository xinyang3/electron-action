


const { rtc, agoraParams } = require('./agora-web/index')
const remote = require('electron').remote

require('resource/js/ipcRender')
require('resource/js/toolbar')
require('./style.css')

const fields = ['appID', 'channel']
window.$ = jquery = require('jquery')

function join (params) {
  rtc.join(params).then(() => {
    rtc.publish()
  })
}
function init () {
  var btn_hang = document.querySelector('.btn.hang')
  btn_hang.addEventListener('click', (evt) => {
    evt.preventDefault()
    rtc.leave()
    remote.getCurrentWindow().close()
  })
}

init()
join(agoraParams)