<script lang="ts" setup>
import type { ButtonProps } from "./types"
import { ref } from "vue"
import Icon from "../Icon/Icon.vue";
// import { defineComponent, defineProps } from "vue"
// import './style.css'
defineOptions({
  name: 'yunButton'
})
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref:_ref
})
</script>

<template>
  <button
    :title="disabled || loading?'disabled':''"
    ref="_ref"
    class="yun-button "
    :class="{
      [`yun-button--${type}`]: type,
      [`yun-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading':loading,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon  icon="spinner" span v-if="loading"></Icon>
    <Icon :icon="icon" v-if="icon"></Icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>

</style>