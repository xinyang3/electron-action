/** 
 * @description rtcEngine
 * @author xinyang3
 * @date 2020/5/20
*/
const AgoraRtcEngine = require('agora-electron-sdk')
const path = require('path')
const os = require('os');

const logpath = process.env.AGORA_LOG_PATH, APPID = process.env.AGORA_APPID

function Enginer (options = {}) {
  let enginer = {};
  enginer.rtcEngine = new AgoraRtcEngine()
  enginer.options = options;

  enginer.init = function () {
    let rtcEngine = this.rtcEngine;

    rtcEngine.initialize(enginer.APPID)
    rtcEngine.on('joinedChannel', (channel, uid, elapsed) => {
      let localVideoContainer = document.querySelector('#local')
      rtcEngine.setupLocalVideo(localVideoContainer)
    })
    rtcEngine.on('error', (err, msg) => {
      consoleLog(`error: code ${err} - ${msg}`)
    })
    rtcEngine.on('userJoined', (uid) => {
      let remoteVideoContainer = document.querySelector('#remote')
      rtcEngine.setupViewContentMode(uid, 1);
      rtcEngine.subscribe(uid, remoteVideoContainer)
    })
    rtcEngine.setChannelProfile(1)
    rtcEngine.setClientRole(1)
    rtcEngine.enableVideo()
    const logpath = path.join(os.homedir(), this.options.logpath)
    rtcEngine.setLogFile(logpath)
  }
  enginer.join = function ({ token = null, channel, uid }) {
    this.datartcEngine.joinChannel(token, channel, null, uid)
  }

  enginer.leave = function () {
    return this.rtcEngine.leave({ logpath, APPID })
  }
  enginer.release = function () {

  }

  return enginer;
}

const engine = Enginer();

module.exports = engine;