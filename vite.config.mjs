import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './')
      },
      {
        find: '~',
        replacement: path.resolve(__dirname, './')
      }
    ]
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: [
        'index.html'
      ],
      output: {
        entryFileNames: 'scripts/index.js',
        chunkFileNames: 'scripts/index.[hash].js',
        assetFileNames: 'styles/index.css'
      }
    }
  }
})
