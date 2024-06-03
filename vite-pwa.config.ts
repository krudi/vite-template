import { VitePWA } from 'vite-plugin-pwa'

export const pwaPlugin = VitePWA({
    devOptions: {
        enabled: true,
        type: 'module',
    },
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
        name: 'vite-template',
        short_name: 'vite-template',
        description: 'Description for the webmanifest file.',
        theme_color: '#FFFFFF',
        background_color: '#AFCC1E',
        display: 'standalone',
        start_url: '/',
        lang: 'en-EN',
        orientation: 'any',
        prefer_related_applications: true,
        categories: ['template'],
        icons: [
            {
                src: 'favicons/vite-16x16.svg',
                type: 'image/svg+xml',
                sizes: '16x16',
                purpose: 'maskable'
            },
            {
                src: 'favicons/vite-32x32.svg',
                type: 'image/svg+xml',
                sizes: '32x32',
                purpose: 'maskable'
            },
            {
                src: 'favicons/vite-48x48.svg',
                type: 'image/svg+xml',
                sizes: '48x48',
                purpose: 'maskable'
            },
            {
                src: 'favicons/vite-144x144.svg',
                type: 'image/svg+xml',
                sizes: '144x144',
                purpose: 'any'
            },
            {
                src: 'favicons/vite-192x192.svg',
                type: 'image/svg+xml',
                sizes: '192x192',
                purpose: 'maskable'
            },
            {
                src: 'favicons/vite-512x512.svg',
                type: 'image/svg+xml',
                sizes: '512x512',
                purpose: 'maskable'
            }
        ],
        screenshots: [
            {
                src: 'manifest/desktop-home-screen-view.webp',
                sizes: '1280x720',
                type: 'image/webp',
                form_factor: 'wide',
                label: 'Homescreen of the app in the desktop view.'
            },
            {
                src: 'manifest/mobile-home-screen-view.webp',
                sizes: '540x720',
                type: 'image/webp',
                form_factor: 'narrow',
                label: 'Homescreen of the app in the mobile view.'
            }
        ]
    },
    workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}'],
    }
});
