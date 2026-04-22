import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  // ✅ Sahi format: "/repo-name/"
  base: "/://online-game-stores.com", 
  plugins: [react()],
})
