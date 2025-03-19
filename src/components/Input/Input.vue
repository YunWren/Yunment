<script setup lang="ts">
import { text } from 'stream/consumers';
import type { InputProps } from './types'
defineOptions({
  name:'YunInput'
})
withDefaults(defineProps<InputProps>(),{type:'text'})
</script>

<template>
  <div
   class="yun-input"
   :class="{
    [`yun-input--${type}`]:type,
    [`yun-input--${size}`]:size,
    'is-disabled':disabled,
    'is-prepend':$slots.prepend,
    'is-append':$slots.prefix,
    'is-prefix':$slots.append,
    'is-suffix':$slots.suffix,
   }">
   <!-- input -->
   <template v-if="type !== 'textarea'">
    <!-- prepend slot -->
    <div v-if="$slots.prepend" class="vk-input__prepend">
      <slot name="prepend" />
    </div>
    <div class="vk-input__wrapper">
      <!-- prefix slot -->
      <span v-if="$slots.prefix" class="vk-input__prefix">
          <slot name="prefix" />
      </span>
      <input
       class="yun-input__inner"
       type="type"
       :disabled="disabled"
       >
       <!-- suffix slot -->
        <span v-if="$slots.suffix" class="yun-input__suffix">
          <slot name="suffix"></slot>
        </span>
     </div>
  </template>
   <!-- textarea -->
  <template else>
    <textarea 
      class="yun-text__wrapper"
      :disabled="disabled"
    ></textarea>
  </template>
   </div>
</template>