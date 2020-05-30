const { app, BrowserWindow } = require("electron");
let mainWindow = null;
const path = require("path");

app.on("ready", () => {
  console.log("Hello from Electron.");
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.webContents.loadFile(path.resolve(__dirname, "./index.html"));
  mainWindow.webContents.openDevTools({ mode: "detach" });
});
