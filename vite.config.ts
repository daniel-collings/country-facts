import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_ENV === 'dev' ? '/' : '/country-facts/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.ts']
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    },
    server: {
      port: 3000
    },
    preview: {
      port: 4173
    }
  }
})
