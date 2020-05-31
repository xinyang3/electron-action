const { dialog, ipcMain } = require("electron");
const fs = require("fs");

const getFileFromUser = (exports.getFileFromUser = () => {
  const files = dialog.showOpenDialog(mainWindow, {
    properties: ["openFile"],
    filters: [
      { name: "Text Files", extensions: ["txt"] },
      { name: "Markdown Files", extensions: ["md", "markdown"] },
    ],
  });
  if (files) {
    return {
      file: files[0],
      constent: openFile(files[0]),
    };
  }
  return;
});

const openFile = (file) => {
  return fs.readFileSync(file).toString();
};

ipcMain.on("file-open", (event, data) => {
  const result = getFileFromUser();
  event.sender(result);
});
