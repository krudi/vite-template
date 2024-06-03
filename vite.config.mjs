import { defineConfig } from 'vite'
import { resolve } from 'path'
import { pwaPlugin } from './vite-pwa.config'

export default defineConfig({
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src')
            },
            {
                find: '~',
                replacement: resolve(__dirname, './src')
            }
        ]
    },
    build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
    },
    plugins: [
        pwaPlugin,
    ]
})
