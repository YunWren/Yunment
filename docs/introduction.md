# **云格：基于 Vue3 的轻量级组件库展示站**

## 🌟 项目简介
这是一个仿 Element UI 设计风格的 Vue3 组件库实现，旨在通过简洁的代码结构、模块化设计和高度可定制性，为开发者提供轻量级的前端组件解决方案。  
通过配套的**在线展示站**，您可以：
- **实时预览** 10+ 基础组件（如 Button、Input、Message 等）  
- **交互式调试** 组件的不同状态与参数组合，并与icon结合  
- **一键复制** 组件代码片段，快速集成到项目中  
- **查看 API 文档** 与设计规范  

**GitHub 仓库**：[https://github.com/yungegegege/yunment](https://github.com/yungegegege/yunment)  

---

## 🛠️ 技术亮点
### 1. 核心技术栈
- **框架**: Vue3 + TypeScript + Vite  
- **样式方案**: CSS + BEM 命名规范  
- **文档系统**: VitePress 静态站点生成  
- **工具链**: ESLint + Prettier

### 2. 实现特色
- **按需加载** 通过 `unplugin-vue-components` 实现自动导入  
- **主题定制** 提供 CSS 变量覆盖接口（示例代码）：
  ```css
  :root {
    --yun-color-primary-light-3: #7ab8ff; //
    --yun-color-primary-light-5: #a6d1ff; 
    --yun-color-primary-light-7: #d2e8ff;  
    --yun-color-primary-light-9: #e8f3ff;  
  }
  ```
- **响应式设计** 适配移动端与桌面端  
- **更美观的选择** 基于基础样式以外，还添加了朴素样式、icon
- **单元测试** 使用 Vitest 覆盖核心组件  

---

## 🎯 核心组件展示
| 组件分类 | 代表组件 | 功能亮点 |
|---------|----------|---------|
| **表单控件** | Input, Form | 支持表单验证、禁用状态、尺寸定制 |
| **数据展示** | Alert  | 动态标签配色 |
| **反馈组件** | Message | 全局消息提示 |
| **导航组件** | Switch| 多级菜单联动、路由集成 |

**特色组件示例：互动Alert**  
![Table 组件截图](/image.png)  
```vue
    <myAlert type="primary" closable>this is a alert abot Primary</myAlert>
    <myAlert type="success" closable>this is a alert abot Success</myAlert>
    <myAlert type="warning" closable>this is a alert abot Warning</myAlert>
    <myAlert type="danger" closable>this is a alert abot Danger</myAlert>
    <myAlert type="info" closable>this is a alert abot Info</myAlert>
```

---

## 🚀 快速上手
### 安装
```bash
npm install your-component-lib
```

### 基础使用
```js
import { createApp } from 'vue'
import App from './App.vue'
import VComponentLib from 'your-component-lib'

createApp(App)
  .use(VComponentLib)
  .mount('#app')
```

### 按需引入（推荐）
```vue
<script setup>
import { VButton, VInput } from 'your-component-lib'
</script>
```

---

## 📈 未来计划
- [ ] 新增 **Tree 树形控件** 与 **Upload 文件上传** 组件  
- [ ] 支持 **暗黑模式** 主题切换  
- [ ] 提供 Figma 设计资源包  
- [ ] 完善 **国际化** 支持 (i18n)  

---

## 🤝 参与贡献
欢迎通过以下方式参与项目：
1. **提交 Issue**：反馈 BUG 或建议新功能  
2. **PR 提交**：遵循 [贡献指南](贡献文档链接) 的代码规范  
3. **文档改进**：修正错别字或补充使用示例  

---

**点亮 Star** ⭐️ [GitHub 仓库](https://github.com/your-repo)  