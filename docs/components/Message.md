---
title: Message | Yun-Element
description: Message 组件的文档
---

# Message 消息提示
常用于主动操作后的反馈提示。

## 基础用法
从顶部出现，3 秒后自动消失。 注册了一个 `createMessage` 方法用于调用。 `Message` 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

<preview path="../demo/Message/Basic.vue" title="Message基础用法" description="Message 组件的基础用法"></preview>

## 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。设置 type 字段可以定义不同的状态，默认为info。

<preview path="../demo/Message/Type.vue" title="Message基础用法" description="Message 组件的基础用法"></preview>

## 可关闭的消息提示
可以添加关闭按钮。

默认的 `Message` 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 `true` ，`Message` 拥有可控的 `duration`， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。

<preview path="../demo/Message/Show.vue" title="Message基础关闭用法" description="Message 组件的可关闭用法"></preview>

## 手动关闭所有实例
可以调用 message 模块提供了一个 `closeAll()` 手动关闭所有实例。

<preview path="../demo/Message/Close.vue" title="Message关闭用法" description="Message 组件的关闭用法"></preview>

## API

### 属性

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td><code>'string | number'</code></td><td></td></tr><tr><td>options</td><td>下拉框选项</td><td><code>SelectOption[]</code></td><td>[]</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td>''</td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>filterable</td><td>自定义筛选方法</td><td><code>boolean</code></td><td>false</td></tr><tr><td>filter-method</td><td>自定义筛选方法</td><td><code>(value: string | number) =&gt; SelectOption[]</code></td><td></td></tr><tr><td>remote</td><td>其中的选项是否从服务器远程加载</td><td><code>boolean</code></td><td>false</td></tr><tr><td>remote-method</td><td>自定义远程筛选方法</td><td><code>(value: string | number) =&gt; Promise&lt;SelectOption[]&gt;</code></td><td></td></tr></tbody></table>

### SelectOption 属性

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>选项显示的文字</td><td><code>'string'</code></td><td></td></tr><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td><td></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>

### 事件

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>选项显示的文字</td><td><code>'string'</code></td><td></td></tr><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td><td></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>