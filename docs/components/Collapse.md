---
title: Collapse | Yun-Element
description: Collapse 组件的文档
---

# Collapse 折叠面板
通过折叠面板收纳内容区域

## 基础用法
可同时展开多个面板，面板之间不影响

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 手风琴效果
每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。

<preview path="../demo/Collapse/Accordion.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

## API

### Collapse Attributes

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>currently active panel</td><td>string (accordion mode) / array (non-accordion mode)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>whether to activate accordion mode</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>

### Collapse Events

<table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when active panels change</td><td>(activeNames: array (non-accordion mode) / string (accordion mode))</td></tr></tbody></table>

### Collapse Slots

<table><thead><tr><th>Name</th><th>Description</th><th>Subtags</th></tr></thead><tbody><tr><td>-</td><td>customize default content</td><td>Collapse Item</td></tr></tbody></table>

### Collapse Item Attributes

<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>unique identification of the panel</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>title</td><td>title of the panel</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>disable the collapse item</td><td>boolean</td><td>—</td><td>—</td></tr></tbody></table>

### Collapse Item Slot

<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>content of Collapse Item</td></tr><tr><td>title</td><td>content of Collapse Item title</td></tr></tbody></table>