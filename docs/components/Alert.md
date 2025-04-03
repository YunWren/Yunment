---
title: Alert | Yun-Element
description: Alert 组件的文档
---

# Alert 提示
用于页面中展示重要的提示信息。

## 基础用法

Alert 组件提供四种类型，由 `type` 属性指定，为 `success`| `warning` | `danger` | `info` , 默认值为 `info`。

<preview path="../demo/Alert/Basic.vue" title="基础用法" description="Alert 组件的基础用法"></preview>

## 主题
Alert 组件提供了两个不同的主题：light 和 dark。

通过设置 `effect` 属性来改变主题，默认为 light。

<preview path="../demo/Alert/Theme.vue" title="基础用法" description="Alert 组件的基础用法"></preview>

## 不可关闭
可以设置 Alert 组件是否为可关闭状态， closable 属性决定 Alert 组件是否可关闭，该属性接受一个 Boolean，默认为 false，即可关闭。


<preview path="../demo/Alert/Close.vue" title="基础用法" description="Alert 组件的基础用法"></preview>

## API

### Alert Attributes

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Alert 类型</td><td><code>enum</code> - 'success' 'warning' 'danger' 'info'</td><td>—</td></tr><tr><td>effect</td><td>主题样式</td><td><code>enum</code> - <code>'light'| 'dark'\</code></td><td>light</td></tr><tr><td>closable</td><td>是否可以关闭</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>