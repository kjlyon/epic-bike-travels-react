import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/epic-bike-travels-react/',
  assetsInclude: ['**/*.jpg', '**/*.png','**/*.jpeg'], 
})
