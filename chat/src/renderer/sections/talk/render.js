import AgoraRtcEngine from 'agora-electron-sdk'
import path from 'path'
import os from 'os'

// With shell.openExternal(url) is how
// external urls must be handled, not href
const shell = require('electron').shell
const APPID = process.env["AGORA_APPID"] || ""
const consoleLog = console.log;
consoleLog(APPID)

function () {
  if (global.rtcEngine) {
    global.rtcEngine.release()
    global.rtcEngine = null
  }

  if (!APPID) {
    alert('Please provide APPID in App.vue')
    return
  }

  const consoleContainer = document.querySelector('#console')

  let rtcEngine = new AgoraRtcEngine()
  rtcEngine.initialize(APPID)

  // listen to events
  rtcEngine.on('joinedChannel', (channel, uid, elapsed) => {
    // consoleContainer.innerHTML = `join channel success ${channel} ${uid} ${elapsed}`
    let localVideoContainer = document.querySelector('#local')
    //setup render area for local user
    rtcEngine.setupLocalVideo(localVideoContainer)
  })
  rtcEngine.on('error', (err, msg) => {
    // consoleContainer.innerHTML = `error: code ${err} - ${msg}`
    consoleLog(`error: code ${err} - ${msg}`)
  })
  rtcEngine.on('userJoined', (uid) => {
    //setup render area for joined user
    let remoteVideoContainer = document.querySelector('#remote')
    rtcEngine.setupViewContentMode(uid, 1);
    rtcEngine.subscribe(uid, remoteVideoContainer)
  })

  // set channel profile, 0: video call, 1: live broadcasting
  rtcEngine.setChannelProfile(1)
  rtcEngine.setClientRole(1)

  // enable video, call disableVideo() is you don't need video at all
  rtcEngine.enableVideo()

  const logpath = path.join(os.homedir(), 'agorasdk.log')
  // set where log file should be put for problem diagnostic
  rtcEngine.setLogFile(logpath)

  // join channel to rock!
  rtcEngine.joinChannel(null, "demoChannel", null, Math.floor(new Date().getTime() / 1000))

  global.rtcEngine = rtcEngine
}