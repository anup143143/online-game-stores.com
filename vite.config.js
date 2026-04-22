import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  base: "/://online-game-stores.com", 
  plugins: [react()],
})
