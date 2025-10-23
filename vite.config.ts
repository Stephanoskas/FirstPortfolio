import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FirstPortfolio/',   // must match repo name & case
  plugins: [react()],
})
