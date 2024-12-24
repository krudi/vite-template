import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: [
            {
                find: '~',
                replacement: resolve(__dirname, './src')
            },
        ]
    },
    build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
    },
})
