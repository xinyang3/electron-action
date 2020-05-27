const remote = require('electron').remote

export function resize ({ width, height }) {
  remote.getCurrentWindow().setSize(width, height, true);
}

export function getSize () {
  return remote.getCurrentWindow().getSize()
}