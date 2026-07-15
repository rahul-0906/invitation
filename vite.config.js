import { defineConfig } from 'vite'

// Kanaa Kanden Wedding Invitation — Vite Dev Server Config
// Default port: 5179 for both development and preview

export default defineConfig({
  server: {
    port: 5179,
    open: true,
    strictPort: true, // Fail instead of auto-incrementing port
  },
  preview: {
    port: 5179,
    strictPort: true,
  },
})
