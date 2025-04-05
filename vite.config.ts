import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // dts({
    //   entryRoot: './src',
    //   outDir: 'dist/types',
    //   include: ['src/​**​/*.ts', 'src/​**​/*.vue'],
    //   rollupTypes: true,
    //   staticImport: true,
    //   compilerOptions: {
    //     preserveSymlinks: true
    //   }
    // }),
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'YunElement',
      formats: ['es', 'umd'],
      fileName: (format) => `yun-element.${format}.js`
    },
    rollupOptions: {
      //外部化vue避免重复打包
      // external: ['vue'],
      output: {
        exports: 'named', // 禁用默认导出警告
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
