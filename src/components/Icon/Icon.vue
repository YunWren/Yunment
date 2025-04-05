<script setup lang="ts">
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconProps } from './types'
import { computed } from 'vue';
// import { defineProps } from 'vue'
defineOptions({
  name:'YIcon',
  inheritAttrs:false
})
const props = defineProps<FontAwesomeIconProps & IconProps>()
const customStyles = computed(()=>{
  return props.color? {color:props.color}:{}
})
</script>

<template>
  <i class="yun-icon" :class="{[`yun-icon--${type}`]:type}" :style="customStyles" v-bind="$attrs">
    <font-awesome-icon v-bind="$props"/>
  </i>
</template>