const BasePath = '/GTA_SA_Save_Game_EditorPy/'
const staticfilesPWA = "StaticFiles_v0.2.1-alpha"

const assets = [
    `${BasePath}/`,
    `${BasePath}/static/py/main.py`,
    `${BasePath}/static/js/main.js`,
    `${BasePath}/static/pyconfig.toml`,
    `${BasePath}/static/images/icons/GTA_SA_Savegame_EditorPy_icon_x192.png`,
    `${BasePath}/static/images/icons/GTA_SA_Savegame_EditorPy_icon_x512.png`,


    // GTA SA Save Game EditorPy Source Code
    "https://raw.githubusercontent.com/Saketh-Chandra/GTA_SA_Save_Game_EditorPy/master/GTA_SA_Save_Game_Editor.py",


    // pyscript
    "https://pyscript.net/releases/2023.11.1/core.css",
    "https://pyscript.net/releases/2023.11.1/core.js",
    "https://pyscript.net/releases/2023.11.1/error-96hMSEw8.js",
    "https://pyscript.net/releases/2023.11.1/toml--Dzglv4T.js",
    "https://pyscript.net/releases/2023.11.1/py-terminal-XWbSa71s.js",

    // pyodide
    "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide-lock.json",
    "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.asm.js",
    "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/python_stdlib.zip",
    "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.asm.wasm",
    "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.mjs",


    // bootstrap
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
    "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js",



]


self.addEventListener("install", installEvent => {
    console.log("service worker installed")
    installEvent.waitUntil(
        caches.open(staticfilesPWA).then(cache => {
            cache.addAll(assets).then(r => {
                console.log("Cache assets downloaded");
            }).catch(err => console.log("Error caching item", err))
            console.log(`Cache ${staticfilesPWA} opened.`);
        }).catch(err => console.log("Error opening cache", err))
    )
})


// activate event
self.addEventListener('activate', evt => {
    console.log('service worker activated');
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticfilesPWA)
                .map(key => caches.delete(key))
            );
        })
    );
});


self.addEventListener("fetch", fetchEvent => {
    console.log("fetched", fetchEvent.request.url)
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        }).catch(err => console.log("Cache fetch error: ", err))
    )
})