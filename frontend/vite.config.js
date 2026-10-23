import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': 'http://localhost:5174',

      '/crm-lead': {
        target: 'https://workspace.foxaircomm.co.in',
        changeOrigin: true,
        secure: true,
        rewrite: () => '/api/webhook-leads/lead',
        configure: (proxy) => {
          proxy.on('proxyReq', (req) => {
            req.removeHeader('origin')
            req.removeHeader('referer')
          })
        },
      },
    },
  },
})