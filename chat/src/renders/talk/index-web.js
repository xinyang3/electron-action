

(function () {
  const AgoraRTC = require('agora-rtc-sdk')
  const RTC = require('./agora-web/index')
  const remote = require('electron').remote
  require('../../resource/js/ipcRender')
  require('../../resource/js/window-opera')

  const rtc = RTC.rtc, agora_params = RTC.agora_params;
  window.$ = jquery = require('jquery')
  const fields = ['appID', 'channel']

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
  join(agora_params)

})()