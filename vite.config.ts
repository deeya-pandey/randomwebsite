import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' is NOT used: absolute paths are required for nested routes (/services/).
// If the site is deployed in a sub-folder, set base to '/folder/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: { target: 'es2020', sourcemap: false },
})
