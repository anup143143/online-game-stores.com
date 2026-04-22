import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  // ✅ Sahi format sirf repository ka naam hota hai
  base: "/://online-game-stores.com", 
  plugins: [react()],
})
