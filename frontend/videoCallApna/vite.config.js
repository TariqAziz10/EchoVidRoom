import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries (e.g., React and React DOM) into a separate chunk
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
