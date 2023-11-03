module.exports = {
    packagerConfig: {
        asar: true,
        icon: "./assets/DesktopGPT_logo.icns",
    },
    rebuildConfig: {},
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {},
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: ["darwin"],
        },
        {
            name: "@electron-forge/maker-dmg",
            config: {
                icon: "./assets/DesktopGPT_logo.icns",
                title: "DesktopGPT",
                name: "DesktopGPT",
            },
        },
        {
            name: "@electron-forge/maker-deb",
            config: {},
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {},
        },
    ],
    plugins: [
        {
            name: "@electron-forge/plugin-auto-unpack-natives",
            config: {},
        },
    ],
};
