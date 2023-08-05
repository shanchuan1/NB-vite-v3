import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',// 将根路径换成相对路径
  plugins: [vue()],
  server: {
    port: 8080,
    https: false,
    proxy: {
      '/api': {
        // target: 'http://backend-api-01.newbee.ltd',
        target: '//backend-api-01.newbee.ltd/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 设置别名
    }
  }
})
