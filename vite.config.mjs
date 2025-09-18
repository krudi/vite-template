import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
export default {
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src'),
            },
        ],
    },
    build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
    },
};
