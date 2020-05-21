

(function () {
  const AgoraRTC = require('agora-rtc-sdk')

  const RTC = require('./agora-web/index')
  const rtc = RTC.rtc, agora_params = RTC.agora_params;
  window.$ = jquery = require('jquery')
  const fields = ['appID', 'channel']

  function getDevices (next) {
    AgoraRTC.getDevices(function (items) {
      items.filter(function (item) {
        return ['audioinput', 'videoinput'].indexOf(item.kind) !== -1
      })
        .map(function (item) {
          return {
            name: item.label,
            value: item.deviceId,
            kind: item.kind,
          }
        })
      var videos = []
      var audios = []
      for (var i = 0; i < items.length; i++) {
        var item = items[i]
        if ('videoinput' == item.kind) {
          var name = item.label
          var value = item.deviceId
          if (!name) {
            name = 'camera-' + videos.length
          }
          videos.push({
            name: name,
            value: value,
            kind: item.kind
          })
        }
        if ('audioinput' == item.kind) {
          let name = item.label
          let value = item.deviceId
          if (!name) {
            name = 'microphone-' + audios.length
          }
          audios.push({
            name: name,
            value: value,
            kind: item.kind
          })
        }
      }
      next({ videos: videos, audios: audios })
    })
  }
  getDevices(function (devices) {
    console.log(devices)
    devices.audios.forEach(function (audio) {
      $('<option/>', {
        value: audio.value,
        text: audio.name,
      }).appendTo('#microphoneId')
    })
    devices.videos.forEach(function (video) {
      $('<option/>', {
        value: video.value,
        text: video.name,
      }).appendTo('#cameraId')
    })
    // resolutions.forEach(function (resolution) {
    //   $('<option/>', {
    //     value: resolution.value,
    //     text: resolution.name
    //   }).appendTo('#cameraResolution')
    // })
    // M.AutoInit()
  })

  function join (params) {
    rtc.join(params).then(() => {
      rtc.publish()
    })
  }
  console.log($)
  $('#leave').on('click', function (e) {
    e.preventDefault()
    console.log('leave')
    rtc.leave()
  })

  join(agora_params)

})()