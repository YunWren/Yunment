import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import path from 'path'
import { fileURLToPath } from 'url'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YUN Element",
  description: "A VitePress Site",
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },

  vite: {
    server: {
      host: '0.0.0.0',  // 允许所有网络访问
      port: 5173,        // 固定端口（可选）
      strictPort: true   // 端口被占用时直接报错（可选）
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '上手', link: '/introduction' }
    ],

    sidebar: [
      {
        text: '关于',
        items: [
          { text: '本站介绍', link: '/introduction' },
          { text: '一些碎碎念', link: '/brokenThoughts' }
        ]
      }, {
        text: '基础样式',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/Input' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YunWren/yunment' }
    ]
  }
})
