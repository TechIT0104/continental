import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Third design ("The Continental" — John Wick neo-noir).
// Deployed as a GitHub project page at https://techit0104.github.io/continental/
export default defineConfig({
  plugins: [react()],
  base: '/continental/',
})
