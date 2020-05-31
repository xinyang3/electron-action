const { app, BrowserWindow } = require("electron");
const path = require("path");
require("./ipcMain");

let mainWindow = null;

app.on("ready", (e) => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile(path.resolve(__dirname, "./index.html"));
  mainWindow.webContents.openDevTools();
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
