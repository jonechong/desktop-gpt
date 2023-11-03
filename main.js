const { app, BrowserWindow } = require("electron");

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
        },
    });

    // Load the website
    win.loadURL("https://chat.openai.com/");

    // Persist session data.
    const ses = win.webContents.session;
    ses.cookies
        .get({})
        .then((cookies) => {
            console.log(cookies);
        })
        .catch((error) => {
            console.log(error);
        });
}

app.whenReady().then(createWindow);
