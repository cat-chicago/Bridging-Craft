import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Bridging-Craft/',
  plugins: [react({ jsxRuntime: 'classic' })],
  build: { rollupOptions: { input: { main: 'index.html', contact: 'contact.html' } } },
})
