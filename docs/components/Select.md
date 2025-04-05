---
title: Select | Yun-Element
description: Select 组件的文档
---

# 选择器
当选项过多时，使用下拉菜单展示并选择内容。


## 基础用法

适用广泛的基础单选 v-model 的值为当前被选中的 option 的 value 属性值。

<preview path="../demo/Select/Basic.vue" title="基础选择器" description="Select 基础选择器"></preview>

## 可清空单选

您可以使用清除图标来清除选择。设置`clearable`属性，则可将选择器清空。

<preview path="../demo/Select/Clear.vue" title="清空选择器" description="Clear清空选择器"></preview>

## 自定义模板

你可以自定义如何来渲染每一个选项，使用`renderLabel`属性，它接受一个回调函数，返回vNode类型。

<preview path="../demo/Select/CustomRender.vue" title="自定义模板" description="Select自定义模板"></preview>

## 筛选选项

可以利用筛选功能快速查找选项。

添加`filterable`属性即可启用搜索功能。默认情况下，Select会找出所有label属性包含输入值的选项。如果希望使用其他的逻辑搜索。可以通过传入一个`filter-method`来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。

<preview path="../demo/Select/Filter.vue" title="筛选选项" description="Select筛选选项"></preview>


## 远程搜索
输入关键字以从远程服务器中查找数据。

服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将 `filterable` 和 `remote` 设置为true，同时传入一个`remote-method`。 remote-method 为一个返回 Promise 的Function，类型为 `(value: string) => Promise<SelectOption[]>`。

<preview path="../demo/Select/Remote.vue" title="远程搜索" description="Select远程搜索"></preview>

## API

### 属性

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td><code>'string | number'</code></td><td></td></tr><tr><td>options</td><td>下拉框选项</td><td><code>SelectOption[]</code></td><td>[]</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td>''</td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>filterable</td><td>自定义筛选方法</td><td><code>boolean</code></td><td>false</td></tr><tr><td>filter-method</td><td>自定义筛选方法</td><td><code>(value: string | number) =&gt; SelectOption[]</code></td><td></td></tr><tr><td>remote</td><td>其中的选项是否从服务器远程加载</td><td><code>boolean</code></td><td>false</td></tr><tr><td>remote-method</td><td>自定义远程筛选方法</td><td><code>(value: string | number) =&gt; Promise&lt;SelectOption[]&gt;</code></td><td></td></tr></tbody></table>

### SelectOption属性

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>选项显示的文字</td><td><code>'string'</code></td><td></td></tr><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td><td></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>

### 事件

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>当选择器的输入框失去焦点时触发</td><td><code>(e: SelectOption) =&gt; void</code></td></tr><tr><td>visible-change</td><td>当下拉框显示或者隐藏时候触发</td><td><code>(e: boolean) =&gt; void</code></td></tr><tr><td>clear</td><td>在点击由 clearable 属性生成的清空按钮时触发</td><td><code>()=&gt;void</code></td></tr></tbody></table>
