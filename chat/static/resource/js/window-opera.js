const ipcRenderer = require('electron').ipcRenderer;
const browserId = require('electron').remote.getCurrentWindow().id

const max = document.querySelector('#max');
const min = document.querySelector('#min');
const close = document.querySelector('#close');

if (max) {
  max.addEventListener('click', (e) => {
    e.preventDefault()
    ipcRenderer.send('window-max', { browserId })
  })
}
if (min) {
  min.addEventListener('click', (e) => {
    e.preventDefault()
    ipcRenderer.send('window-min', { browserId })
  })
}
if (close) {
  close.addEventListener('click', (e) => {
    e.preventDefault()
    require('electron').remote.getCurrentWindow().close()
    ipcRenderer.send('window-close', { browserId })
  })
}