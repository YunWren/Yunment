<script setup lang="ts">
import type { CollapseItemProps } from './types'
import { collapseContextKey } from './types'
import { inject, computed } from 'vue'
import Icon from '../Icon/Icon.vue'
defineOptions({
  name:'YCollapseItem'
})
const props = defineProps<CollapseItemProps>()
const collapseContext = inject(collapseContextKey)
const isActive = computed(()=>collapseContext?.activeNames.value.includes(props.name))
// console.log(isActive);

const handleClick= ()=>{
  console.log(props.name)
  if(props.disabled){return}
  collapseContext?.handleItemClick(props.name)
}
const transitionEvents:Record<string,(el:HTMLElement)=>void>={
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden' // 隐藏溢出内容
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow ='hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>

<template>
<div
  class="yun-collapse-item"
  :class="{
    'is-disabled': disabled,
  }"
  >
  
  <div
   class="yun-collapse-item__header"
   :class="{
      'is-disabled':disabled,
      'is-active':isActive
    }"
   :id="`item-header-${name}`" @click="handleClick">
    <slot name="title">{{ title }}</slot>
    <Icon icon="angle-right" class="header-angle"></Icon>
  </div>
  <Transition name="slide" v-on="transitionEvents">
    <div class="yun-collapse-item__wrapper" v-show="isActive">
      <div class="yun-collapse-item__content" :id="`item-content-${name}`">
        <slot></slot>
      </div>
    </div>
  </Transition>
  </div>
</template>

<style>
.yun-collapse-item_header {
  font-size: 30px;
}
</style>