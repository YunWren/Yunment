---
title: Switch | Yun-Element
description: Switch 组件的文档
layout: doc
prev:
  text: 'Input'
  link: 'components/Input'
next:
  text: 'Select'
  link: 'components/Select'
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 v-model 到一个 Boolean 类型的变量。 可以使用 **--yun-switch-on-color** 属性与 **--yun-switch-off-color** 属性来设置开关的背景色。

<preview path="../demo/Switch/Basic.vue" title="基础Switch" description="Switch 基础用例"></preview>

## 深色模式适配

组件内置深色模式样式，可通过添加 ​**night** 属性或设置 CSS 变量实现暗色主题适配。

<preview path="../demo/Switch/Night.vue" title="深色模式适配" description="Switch 深色模式下的表现"></preview>

## 禁用状态

设置 **disabled** 属性，接受一个 boolean，设置true即可禁用。

<preview path="../demo/Switch/Disabled.vue" title="Switch 禁用状态" description="Switch 禁用状态"></preview>

## 不同尺寸

设置 **size** 属性，接受**large / small**，呈现不同的尺寸。

<preview path="../demo/Switch/Size.vue" title="Switch 不同尺寸" description="Switch 不同尺寸"></preview>

## 支持自定义 value 类型

你可以设置 **active-value** 和 **inactive-value** 属性， 它们接受 boolean | string | number 类型的值。
<preview path="../demo/Switch/CustomValue.vue" title="支持自定义 value 类型" description="Switch 支持自定义 value 类型"></preview>

## 文字描述

使用 **active-text** 属性与 **inactive-text** 属性来设置开关的文字描述。

<preview path="../demo/Switch/Text.vue" title="支持文字描述" description="Switch 文字描述"></preview>

## API

### 属性

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>model-value / v-model</td>
      <td>绑定值</td>
      <td><code>'string' | 'boolean' | 'number'</code></td>
      <td>false</td></tr>
      <tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr>
      <tr><td>active-text</td><td>switch 打开时的文字描述</td><td><code>string</code></td><td></td></tr>
      <tr><td>inactive-text</td><td>switch 的状态为 off 时的文字描述</td><td><code>'large' | 'small'</code></td><td></td></tr>
      <tr><td>active-value</td><td>switch 状态为 on 时的值</td><td><code>'string' | 'boolean' | 'number'</code></td><td>true</td></tr>
      <tr><td>inactive-value</td><td>switch 状态为 off 时的值</td><td><code>'string' | 'boolean' | 'number'</code></td><td>false</td></tr>
      <tr><td>name</td><td>switch 对应的 name 属性</td><td><code>string</code></td><td></td></tr>
      <tr><td>id</td><td>input 的 id</td><td><code>string</code></td><td></td></tr>
      <tr><td>black</td><td>黑夜模式</td><td><code>boolean</code></td><td>false</td></tr>
  </tbody>
</table>
