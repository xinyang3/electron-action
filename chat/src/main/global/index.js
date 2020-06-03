/** 
 * @description 设置全局状态
 * @author xinyang3
 * @date 2020/6/2 
 */

import { selectFile } from './dialogFile'
import { createWindow } from './window'


global.selectFile = selectFile;

global.createWindow = createWindow;

export default global