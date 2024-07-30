import { defineConfig, version } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { createHtmlPlugin } from 'vite-plugin-html'
import packageJson from './package.json' assert { type: 'json' }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSingleFile(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Master Server Toolkit Dashboard',
          description: 'This panel allows you to connect to MST from anywhere',
          version: packageJson.version
        }
      }
    })
  ],
})
