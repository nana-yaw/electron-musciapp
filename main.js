const {app, BrowserWindow} = require('electron')
const path = require('path')

const createWindow = () => {
    let mainWindow = new BrowserWindow({
        width: 400,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})