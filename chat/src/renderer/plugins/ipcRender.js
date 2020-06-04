/** 
 * @description renderer ipcRender注册的事件
 * @author xinyang3
 * @date 2020/6/4
*/

import { renderRegisterEvent } from 'resource/js/ipcRender'
import logger from 'resource/js/logger'

renderRegisterEvent('renderer-file-download', (e, data) => {
  logger.debugLog(`renderder file download completed ${data}`)
})