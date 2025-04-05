---
title: Tooltip | Yun-Element
description: Tooltip 组件的文档
---

# Tooltip 文字提示
常用于展示鼠标 hover 时的提示信息。

## 基础用法
使用 content 属性来决定 hover 时的提示信息。

<preview path="../demo/Tooltip/Basic.vue" title="基础Tooltip" description="Tooltip 基础用例"></preview>

## 不同位置
由 placement 属性决定展示效果： placement属性值为：[方向]-[对齐位置]；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。

<preview path="../demo/Tooltip/Placement.vue" title="位置Tooltip" description="Tooltip 位置用例"></preview>

## 触发方式
由 trigger 属性决定触发方式： hover | click, 默认为 hover

<preview path="../demo/Tooltip/Trigger.vue" title="触发Tooltip" description="Tooltip 触发用例"></preview>

## 更多内容的文字提示
展示多行文本或者是设置文本内容的格式

用具名 slot content，替代tooltip中的content属性。

<preview path="../demo/Tooltip/Slot.vue" title="插槽Tooltip" description="Tooltip 插槽用例"></preview>

## 手动触发
将 manual 属性设置为 true 即可， 然后可以使用实例上面的 show 和 hide 方法打开关闭下拉菜单。

<preview path="../demo/Tooltip/Manual.vue" title="手动Tooltip" description="Tooltip 手动用例"></preview>


## API

### Attributes

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>content</td><td>display content, can be overridden by <code>slot#content</code></td><td>^[string]</td><td>''</td></tr><tr><td>placement</td><td>position of Tooltip</td><td>^[enum]<code>'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'</code></td><td>bottom</td></tr><tr><td>popper-options</td><td><a href="https://popper.js.org/docs/v2/" target="_blank" rel="noreferrer">popper.js</a> parameters</td><td>^[object]refer to <a href="https://popper.js.org/docs/v2/" target="_blank" rel="noreferrer">popper.js</a> doc</td><td>{}</td></tr><tr><td>open-delay</td><td>delay of appearance, in millisecond</td><td>^[number]</td><td>0</td></tr><tr><td>close-delay</td><td>delay of disappear, in millisecond</td><td>^[number]</td><td>200</td></tr><tr><td>trigger</td><td>How should the tooltip be triggered (to show)</td><td>^[enum]<code>'hover' | 'click'</code></td><td>hover</td></tr><tr><td>manual</td><td>是否开启手动触发模式</td><td>^[boolean]`</td><td>false</td></tr><tr><td>transition</td><td>transition name</td><td>^[string]</td><td>''</td></tr></tbody></table>

### Events

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>visible-change</td><td>当 tooltip 展示/隐藏时被触发</td><td><code>boolean</code></td></tr><tr><td>click-outside</td><td>当点击到 Tooltip 外侧区域时被触发</td><td><code>boolean</code></td></tr></tbody></table>

### Slots

<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Tooltip triggering &amp; reference element</td></tr><tr><td>content</td><td>customize content</td></tr></tbody></table>

### Exposes

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>show</td><td>expose show function</td><td>^[Function]<code>(event?: Event | undefined) =&gt; void</code></td></tr><tr><td>hide</td><td>expose hide function</td><td>^[Function]<code>(event?: Event | undefined) =&gt; void</code></td></tr></tbody></table>

