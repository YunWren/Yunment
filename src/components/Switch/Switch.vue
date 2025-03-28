<script setup lang="ts">
import { ref, computed, onMounted,watch,watchEffect } from 'vue'
import type { SwtichEmits,SwtichProps } from './types'
  defineOptions({
    name:'yunSwtich',
    inheritAttrs: false
})
const props = withDefaults(defineProps<SwtichProps>(), {
  activeValue :() => true,
  inactiveValue: () => false
})
console.log(props.activeValue,props.inactiveValue)

console.log('All Props:', props);
// 而不仅仅是 props.activeValue
const emits = defineEmits<SwtichEmits>()

const innerValue = ref(props.modelValue)
const input = ref<HTMLInputElement>()
// 现在是否被选中
const checked = computed(() => innerValue.value ===props.activeValue)
const switchValue = () => {
  if (props.disabled) return
  const newValue = checked.value ? props.inactiveValue : props.activeValue
  innerValue.value = newValue
  console.log(props.activeValue,props.inactiveValue)
  emits('update:modelValue', newValue)
  emits('change', newValue)
}
onMounted(() => {
  input.value!.checked = checked.value
})
watch(checked, (val) => {
  input.value!.checked = val
})
watch(() => props.modelValue, (newValue) => {
  innerValue.value = newValue
})
watchEffect(() => {
  if (props.activeValue === undefined) {
    console.error('activeValue 未正确注入！')
  }
})
watch(() => props.modelValue, (newVal) => {
  // 添加类型安全校验
  if ([props.activeValue, props.inactiveValue].includes(newVal)) {
    innerValue.value = newVal;
  }
});
</script>

<template>
  <div
    class="yun-switch"
    :class="{
      [`yun-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked,
      'is-night': night,
    }"
    @click="switchValue"
  >
    <input 
      class="yun-switch__input"
      type="checkbox"
      role="switch"
      ref="input"
      :name="name"
      :disabled="disabled"
      @keydown.enter="switchValue"
    />
    <div class="yun-switch__core">
      <div class="yun-switch__core-inner">
        <span v-if="activeText || inactiveText" class="yun-switch__core-inner-text">
          {{checked ? activeText : inactiveText}}
        </span>
      </div>
      <div class="yun-switch__core-action"></div>
    </div>
  </div>
  </template>