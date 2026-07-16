import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 5179,
    open: true,
    strictPort: true,
  },
  preview: {
    port: 5179,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        poster: resolve(__dirname, 'poster.html'),
      },
    },
  },
})
