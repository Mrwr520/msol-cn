import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/msol-cn/',  // 改成你的 GitHub 仓库名
  server: {
    host: true,
    allowedHosts: true,
  },
})
