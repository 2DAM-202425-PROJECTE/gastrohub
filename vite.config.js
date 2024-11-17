import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/', // Reemplaza con el nombre de tu repositorio
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                features: resolve(__dirname, 'public/features.html'),
            },
        },
    },
})