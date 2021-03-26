const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
let mainWindow;
function createWindow () {
  const startUrl = "https://efe.cliquaprod.com";
  mainWindow = new BrowserWindow({ show:false,titleBarStyle: 'hidden' });
  mainWindow.maximize();  
mainWindow.setMenuBarVisibility(false)

mainWindow.loadURL(startUrl);
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
