const {
  Tray,
  Menu,
  MenuItem,
  nativeImage,
  BrowserWindow,
  app
} = require('electron')
const path = require('path')
const logger = require('resource/js/logger')

function show () {
  BrowserWindow.getAllWindows().forEach(window => window.show())
  logger.debugLog('all windows is shown')
}

function hide () {
  BrowserWindow.getAllWindows().forEach(window => window.hide())
  logger.debugLog('all windows is hidden')
}

function quit () {
  app.quit()
  logger.debugLog('app is quit')
}
console.log(__static)
const quitIcon = nativeImage.createFromPath(path.resolve(`${__static}/icons/uninstaller.ico`)).resize({
  width: 16
})
const menus = [
  new MenuItem({
    type: 'normal',
    label: '显示主页面',
    click: show
  }),
  new MenuItem({
    type: 'normal',
    label: '隐藏主页面',
    click: hide
  }),
  new MenuItem({
    type: 'normal',
    label: '设置'
  }),
  new MenuItem({
    type: 'normal',
    label: '退出',
    icon: quitIcon,
    click: quit
  })
]

let tray = null

module.exports.createTray = function () {
  const iconPath = path.resolve(`${__static}/icons/installer-apc.ico`)
  tray = new Tray(iconPath)

  tray.setToolTip('chat')
  tray.setContextMenu(Menu.buildFromTemplate(menus))

  return tray
}