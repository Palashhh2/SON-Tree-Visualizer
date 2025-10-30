import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SON-Tree-Visualizer/',  // 👈 your repo name here
})
