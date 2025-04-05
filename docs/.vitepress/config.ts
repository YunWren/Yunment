import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath } from 'url'

export default defineConfig({
  base: "/yunment/",
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
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Alert 提示', link: '/components/Alert' },
          { text: 'Collapse 折叠面板', link: '/components/Collapse' },
          { text: 'Tooltip 文字提示', link: '/components/Tooltip' },
          { text: 'Dropdown 下拉菜单', link: '/components/Dropdown' },
          { text: 'Message 消息', link: '/components/Message' },
          { text: 'Input 文字输入', link: '/components/Input' },
          { text: 'Switch 开关', link: '/components/Switch' },
          { text: 'Select 选择器', link: '/components/Select' },
          { text: 'Form 表单', link: '/components/Form' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YunWren/yunment' }
    ]
  }
})
