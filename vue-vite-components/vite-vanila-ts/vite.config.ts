import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, __dirname } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './core/index.ts'),
      name: 'Bundle',
      fileName: 'bundle'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
    dts({ include: './core' })
  ],
})
