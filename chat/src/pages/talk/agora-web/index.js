// import RTCClient from './rtc-client';
const { rTCClient } = require('./rtc-client')

const agoraParams = {
  appID: "f69b4c38a32d436aa1c5c0ebf3eecc32",
  cameraId: "8870a0d66c43a59788b7bb0a94fd6ba5bb324fcf3911661a567b7f62051d752d",
  cameraResolution: "default",
  channel: "123",
  codec: "h264",
  microphoneId: "default",
  mode: "live",
  token: "",
  uid: 0
}


module.exports.rtc = rTCClient;

module.exports.agoraParams = agoraParams