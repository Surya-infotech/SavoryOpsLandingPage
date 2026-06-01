import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { routeMetaHtmlPlugin } from './plugins/vite-route-meta-html.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), routeMetaHtmlPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import']
      }
    }
  }
})
