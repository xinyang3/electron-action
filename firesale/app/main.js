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

const getFileFromUser = (exports.getFileFromUser = () => {
  const files = dialog.showOpenDialog(mainWindow, {
    properties: ["openFile"],
    filters: [
      { name: "Text Files", extensions: ["txt"] },
      { name: "Markdown Files", extensions: ["md", "markdown"] },
    ],
  });
  if (files) {
    openFile(files[0]);
  }
});
const openFile = (file) => {
  const content = fs.readFileSync(file).toString();
  mainWindow.webContents.send("file-opened", file, content);
};
