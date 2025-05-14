import { resolve } from 'path'
import type { UserConfig } from 'vite'

export default {
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
} satisfies UserConfig
