import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'


const pyscriptBaseURL = "https://pyscript.net/releases"
const pyscriptVersion = "2023.12.1"

const pyodideBaseURL = "https://cdn.jsdelivr.net/pyodide"
const pyodideVersion = "v0.23.4"

const GTA_SA_Save_Game_EditorPy_RepoBaseURL = "https://raw.githubusercontent.com/Saketh-Chandra/GTA_SA_Save_Game_EditorPy/dev/GTA_SA_Save_Game_Editor"
const hashRegex = "[a-zA-Z0-9-]+"

const cacheFiles = [

  // pyscript v${pyscriptVersion}
  `${pyscriptBaseURL}/${pyscriptVersion}/core.css`,
  `${pyscriptBaseURL}/${pyscriptVersion}/core.js`,
  `${pyscriptBaseURL}/${pyscriptVersion}/core-${hashRegex}.js`,
  `${pyscriptBaseURL}/${pyscriptVersion}/toml--${hashRegex}.js`,
  `${pyscriptBaseURL}/${pyscriptVersion}/deprecations-manager-${hashRegex}.js`,
  `${pyscriptBaseURL}/${pyscriptVersion}/py-editor-${hashRegex}.js`,
  `${pyscriptBaseURL}/${pyscriptVersion}/py-terminal-${hashRegex}.js`,
  `${pyscriptBaseURL}/${pyscriptVersion}/error-${hashRegex}.js`,

  // pyodide ${pyodideVersion}
  `${pyodideBaseURL}/${pyodideVersion}/full/pyodide.mjs`,
  `${pyodideBaseURL}/${pyodideVersion}/full/python_stdlib.zip`,
  `${pyodideBaseURL}/${pyodideVersion}/full/pyodide.asm.js`,
  `${pyodideBaseURL}/${pyodideVersion}/full/repodata.json`,
  `${pyodideBaseURL}/${pyodideVersion}/full/pyodide.asm.wasm`,


  // GTA_SA_Save_Game_EditorPy python scripts
  `${GTA_SA_Save_Game_EditorPy_RepoBaseURL}/GTA_SA_Save_Game_Editor.py`,
  `${GTA_SA_Save_Game_EditorPy_RepoBaseURL}/__init__.py`,
  `${GTA_SA_Save_Game_EditorPy_RepoBaseURL}/offsets.py`,

]


// Generate runtimeCaching configurations dynamically
const runtimeCachingConfig = cacheFiles.map((url) => ({
  urlPattern: new RegExp(url),
  handler: 'CacheFirst',
  options: {
    cacheName: 'python-cache', // Specify a custom cache name
  },
}));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(
      {
        includeAssets: ["**/*"],
        manifest: {
          name: "GTA: SA Savegame EditorPy",
          short_name: "GTA: SA_Edit",
          categories: [
            "games",
            "utilities",
            "education"
          ],
          description: "GTA: SA Savegame EditorPy is a Python-based savegame editor for Grand Theft Auto: San Andreas.",
          display: "standalone",
          // start_url: "/GTA_SA_Save_Game_EditorPy/",
          // scope: "/GTA_SA_Save_Game_EditorPy/",
          scope: "/",
          start_url: "/",
          theme_color: "#000",
          icons: [
            {
              src: "/images/icons/icon_x512.png",
              type: "image/png",
              sizes: "512x512"
            },
            {
              src: "/images/icons/icon_x192.png",
              type: "image/png",
              sizes: "192x192",
              purpose: "any maskable"
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*'],
          runtimeCaching: runtimeCachingConfig,
        },
      }
    ),
  ],
  base: '/GTA_SA_Save_Game_EditorPy/',
})
