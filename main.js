const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, "assets/ChatGPT_logo.png"),
        webPreferences: {
            nodeIntegration: false,
        },
    });

    // Load the website
    win.loadURL("https://chat.openai.com/");

    // Hide menu bar
    Menu.setApplicationMenu(null);

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
