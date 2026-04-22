import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ❌ Galat tha: base: "/://online-game-stores.com"
  // ✅ Sahi hai:
  base: "/://online-game-stores.com", 
  plugins: [react()],
})
