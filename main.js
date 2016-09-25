const Electron = require('electron');
const app = Electron.app;
const BrowserWindow = Electron.BrowserWindow;

let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 300, height: 400});
  mainWindow.loadURL('file://' + __dirname + '/client/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
