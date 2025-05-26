import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // 现在可以在这里使用 env 对象访问环境变量
  // console.log('Current environment mode:', mode)
  // console.log('API URL from .env:', env.VITE_API_URL)

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      // 输出目录，默认为 dist
      outDir: 'dist',
      // 启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      // 控制台输出打包后的文件大小情况
      reportCompressedSize: true,
      // 混淆器，可选 'terser' 或 'esbuild'
      minify: 'terser',
      terserOptions: {
        // 打包后的代码移除console和debugger
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      // 生成 sourcemap 文件
      sourcemap: false,
    },
    server: {
      // 开发服务器配置，例如代理
      proxy: {
        '/api': {
          // 根据环境变量设置代理目标
          target: env.VITE_API_URL || 'http://localhost:3000', // 使用 VITE_API_URL，如果没有则回退到默认值
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
