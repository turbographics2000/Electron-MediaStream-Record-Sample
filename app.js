const { app, BrowserWindow } = require('electron');
let win;

app.on('ready', _ => {
    win = new BrowserWindow({ width: 400, height: 400 });
    win.loadURL(`file://${__dirname}/win.html`);
    win.on('closed', _ => win = null);
});

app.on('window-all-closed', _ => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});