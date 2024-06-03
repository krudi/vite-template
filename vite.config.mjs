import { defineConfig } from 'vite'
import { resolve } from 'path'
import { pwaPlugin } from './vite-pwa.config'

export default defineConfig({
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './')
            },
            {
                find: '~',
                replacement: resolve(__dirname, './')
            }
        ]
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
            },
        }
    },
    plugins: [
        pwaPlugin,
    ]
})
