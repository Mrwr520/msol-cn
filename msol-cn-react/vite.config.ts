import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // mode=github 时用 /msol-cn/，否则用 /
  base: mode === 'github' ? '/msol-cn/' : '/',
  server: {
    host: true,
    allowedHosts: true,
  },
}))
