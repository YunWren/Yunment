---
title: Button | V-Element
description: Button 组件的文档
---

# Button 按钮
常用的操作按钮。

## 基础用法
使用 `type`、`plain`、`round` 和 `circle`来定义按钮的样式。

<script setup lang="ts">
  import Button from '../../src/components/Button/Button.vue'
</script>

<Button> hello </Button>
<Button loading> Loading </Button>

```vue
<Button> hello </Button>
<Button loading> Loading </Button>
```