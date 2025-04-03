---
title: Input | Yun-Element
description: Input 组件的文档
layout: doc
prev:
  text: 'Messgae'
  link: 'components/Message'
next:
  text: 'Switch'
  link: 'components/Switch'
---


# Input 输入框
通过鼠标或键盘输入字符

## 基础文本框

<preview path="../demo/Input/Basic.vue" title="基础文本框" description="Input 基础文本框"></preview>

## 禁用文本框

通过 **disabled** 属性指定是否禁用 input 组件


<preview path="../demo/Input/Disable.vue" title="禁用文本框" description="Input 禁用文本框"></preview>

## 尺寸
使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： **large**, **small**。

<preview path="../demo/Input/Size.vue" title="不同尺寸文本框" description="不同尺寸文本框"></preview>


## 复合型输入框

可以在输入框前置或后置一个元素，通常是标签或按钮。可以使用 **prepend** 和 **append** 插槽。
要在输入框中添加前后元素，可以使用 **prefix** 和 **suffix** 插槽。

<preview path="../demo/Input/Combo.vue" title="复合型输入框" description="Input 复合型输入框"></preview>

## Textarea

用于输入多行文本信息可缩放的输入框。 添加 **type="textarea"** 属性来将 input 元素转换为原生的 textarea 元素。

<preview path="../demo/Input/Textarea.vue" title="Textarea" description="Textarea"></preview>

## 密码文本框

使用 **show-password** 属性即可得到一个可切换显示隐藏的密码框

<preview path="../demo/Input/Password.vue" title="密码文本框" description="Input 密码文本框"></preview>

## 清空文本框

使用 **clearable** 属性即可得到一个可一键清空的输入框


<preview path="../demo/Input/Clear.vue" title="清空文本框" description="Input 清空文本框"></preview>

## API


### 属性

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>input 原生类型</td><td><code>'string'</code></td><td>text</td></tr><tr><td>model-value / v-model</td><td>绑定值</td><td><code>'string'</code></td><td></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td></td></tr><tr><td>size</td><td>输入框尺寸，只在 type 不为 'textarea' 时有效</td><td><code>'large' | 'small'</code></td><td></td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td></td></tr><tr><td>show-password</td><td>是否显示切换密码图标</td><td><code>boolean</code></td><td>false</td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>readonly</td><td>原生 readonly 属性，是否只读</td><td><code>boolean</code></td><td>false</td></tr><tr><td>autofocus</td><td>原生属性，自动获取焦点</td><td><code>boolean</code></td><td>false</td></tr><tr><td>autocomplete</td><td>原生 autocomplete 属性</td><td><code>string</code></td><td>off</td></tr></tbody></table>

### 事件

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>blur</td><td>当选择器的输入框失去焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td></tr><tr><td>focus</td><td>当选择器的输入框获得焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td></tr><tr><td>change</td><td>当选择器的输入框失去焦点时触发</td><td><code>(e: string) =&gt; void</code></td></tr><tr><td>input</td><td>当选择器的输入框获得焦点时触发</td><td><code>(e: string) =&gt; void</code></td></tr><tr><td>clear</td><td>在点击由 clearable 属性生成的清空按钮时触发</td><td><code>()=&gt;void</code></td></tr></tbody></table>

### Slots

<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>prefix</td><td>输入框头部内容</td></tr><tr><td>suffix</td><td>输入框尾部内容</td></tr><tr><td>prepend</td><td>输入框前置内容</td></tr><tr><td>append</td><td>输入框后置内容</td></tr></tbody></table>

### Exposes

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>ref</td><td>HTML元素 input 或 textarea</td><td><code>Ref&lt;HTMLInputElement | HTMLTextAreaElement&gt;</code></td></tr></tbody></table>