const { remote, ipcRenderer } = require("electron");

ipcRenderer.on("file-opened", (e, file, content) => {
  console.log(file);
});
