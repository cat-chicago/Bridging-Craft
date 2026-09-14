import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Bridging-Craft/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom/client'],
    },
  },
})
