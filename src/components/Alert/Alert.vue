<script setup lang="ts">
import { ref } from 'vue'
import Icon from '@/components/Icon/Icon.vue'
import type { AlertType, MyAlertProps, MyAlertEmits } from './types'

// 类型定义
defineOptions({
  name: 'YAlert'
})

withDefaults(defineProps<MyAlertProps>(), {
  type: 'primary',
  effect: false,
  closable: false,
  content: ''
})

const emit = defineEmits<MyAlertEmits>()

const visible = ref(true)
const iconMap: Record<AlertType, string> = {
  primary: 'info-circle',
  success: 'check-circle',
  warning: 'exclamation-circle',
  danger: 'times-circle',
  info: 'info-circle'
}

// 计算样式类

// 关闭处理方法
const close = () => {
  visible.value = false
  emit('close')
}
</script>

<template>
  <Transition name="yun-alert-fade">
    <div 
    class="yun-alert"
    v-show="visible"
    :class="{
    [`yun-alert--${type}`]:type,
    'is-effect':effect,
    'has-close': closable}"
    role="alert"
    >
      <!-- 左侧图标 -->
        <Icon 
        :icon="iconMap[type]"
        class="alert-icon"
      />

      <!-- 内容区域 -->
      <div class="alert-content">
        <slot>{{ content }}</slot>
      </div>

      <!-- 关闭按钮 -->
      <button
        v-if="!closable"
        class="alert-close"
        @click="close"
        type="button"
        aria-label="Close"
      >
        <Icon icon="xmark" />
      </button>
    </div>
  </Transition>
</template>

<style scoped>
</style>