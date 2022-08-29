import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'
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
                ElementPlusResolver(),
            ],
            deep: true,
        }),
    ],
})