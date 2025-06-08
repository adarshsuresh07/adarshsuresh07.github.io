import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // For username.github.io (root domain)
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build'
  }
}) 