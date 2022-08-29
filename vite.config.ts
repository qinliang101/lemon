import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import path from "path"

export default defineConfig({
    resolve: {
        alias: {
            '@': path.join(__dirname, "src"),
        }
    },
    plugins: [
        vue(),
        Components({
            dts: true,
            resolvers: [
                VantResolver(),
            ],
            deep: true,
        }),
    ],
    server: {
        port: 4000,
        proxy: {
            '^/api': {
                target: 'http://127.0.0.1:3000/',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    },
})