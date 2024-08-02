import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: './login.html',
      },
    },
  },
  server: {
    open: '/login.html',
  },
})