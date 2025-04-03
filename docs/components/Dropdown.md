---
title: Dropdown | Yun-Element
description: Dropdown 组件的文档
---

# Dropdown 下拉菜单
将动作或菜单折叠到下拉菜单中。


## 基础用法
悬停在下拉菜单上以展开更多操作。

<preview path="../demo/Dropdown/Basic.vue" title="基础Dropdown" description="Dropdown 下拉菜单"></preview>


## 触发方式
可以配置点击激活或者悬停激活。

将 trigger 属性设置为 click 即可， 默认为 hover。

<preview path="../demo/Dropdown/Trigger.vue" title="触发Dropdown" description="Dropdown 触发"></preview>

## 手动打开关闭
将 manual 属性设置为 true 即可， 然后可以使用实例上面的 show 和 hide 方法打开关闭下拉菜单。

<preview path="../demo/Dropdown/Manual.vue" title="手动Dropdown" description="Dropdown手动"></preview>

## API

### Attributes

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>menuOptions</td><td>菜单选项</td><td>^MenuOption[]</td><td>[]</td></tr><tr><td>placement</td><td>菜单位置</td><td>^[enum]<code>'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'</code></td><td>bottom</td></tr><tr><td>popper-options</td><td><a href="https://popper.js.org/docs/v2/" target="_blank" rel="noreferrer">popper.js</a> parameters</td><td>^[object]refer to <a href="https://popper.js.org/docs/v2/" target="_blank" rel="noreferrer">popper.js</a> doc</td><td>{}</td></tr><tr><td>open-delay</td><td>delay of appearance, in millisecond</td><td>^[number]</td><td>0</td></tr><tr><td>close-delay</td><td>delay of disappear, in millisecond</td><td>^[number]</td><td>200</td></tr><tr><td>trigger</td><td>触发方式</td><td>^[enum]<code>'hover' | 'click'</code></td><td>hover</td></tr><tr><td>manual</td><td>是否开启手动触发模式</td><td>^[boolean]`</td><td>false</td></tr><tr><td>transition</td><td>transition name</td><td>^[string]</td><td>''</td></tr><tr><td>hideAfterClick</td><td>点击以后是否自动隐藏菜单</td><td>^[boolean]</td><td>true</td></tr></tbody></table>

### MenuOption

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>菜单展示标签</td><td><code>'string' | 'vNode'</code></td><td></td></tr><tr><td>key</td><td>菜单选项 Key</td><td><code>'string' | 'number'</code></td><td></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr><tr><td>divided</td><td>是否显示分隔符</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>

### Events

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>visible-change</td><td>当 tooltip 展示/隐藏时被触发</td><td><code>boolean</code></td></tr><tr><td>select</td><td>当选择到某一个选项的时候被触发</td><td><code>MenuOption</code></td></tr></tbody></table>

### Exposes

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>show</td><td>expose show function</td><td>^[Function]<code>(event?: Event | undefined) =&gt; void</code></td></tr><tr><td>hide</td><td>expose hide function</td><td>^[Function]<code>(event?: Event | undefined) =&gt; void</code></td></tr></tbody></table>