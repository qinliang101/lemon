import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { join } from "path"

export default defineConfig({
  base: 'src',
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
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
  ]
})
