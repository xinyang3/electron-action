import { Tray, Menu, MenuItem, nativeImage, BrowserWindow } from "electron"
import path from 'path'
import logger from '../../static/resource/js/logger'


let tray = null

export default function crateTray (app) {
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

  const quitIcon = nativeImage.createFromPath(path.join(__dirname, '../../', 'static/icons/uninstaller.ico')).resize({ width: 16 })
  const menus = [
    new MenuItem({ type: 'normal', label: '显示主页面', click: show }),
    new MenuItem({ type: 'normal', label: '隐藏主页面', click: hide }),
    new MenuItem({ type: 'normal', label: '设置' }),
    new MenuItem({ type: 'normal', label: '退出', icon: quitIcon, click: quit }),
  ]

  const iconPath = path.join(__dirname, '../../', 'static/icons/installer-apc.ico')
  tray = new Tray(iconPath)

  tray.setToolTip('chat')
  tray.setContextMenu(Menu.buildFromTemplate(menus))

  return tray;
}

