import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from "path"

export default defineConfig({
    resolve: {
        alias: {
            '@': path.join(__dirname, "src"),
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        }
    },
    plugins: [
        vue(),
        Components({
            dts: true,
            resolvers: [
                VantResolver(),
                ElementPlusResolver(),
            ],
            deep: true,
        }),
    ],
    server: {
        port: 4000,
        proxy: {
            '^/api': {
                target: 'http://lemoncc.cn/',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    },
})