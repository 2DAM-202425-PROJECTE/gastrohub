import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/gastrohub/', // Reemplaza con el nombre de tu repositorio
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                features: resolve(__dirname, 'pages/features.html'),
            },
        },
    },
})