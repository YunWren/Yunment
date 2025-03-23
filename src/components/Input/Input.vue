<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { InputProps,InputEmits } from './types'
import Icon from '../Icon/Icon.vue';
defineOptions({
  name:'YunInput'
})
const props = withDefaults(defineProps<InputProps>(),{type:'text'})
const emits = defineEmits<InputEmits>()
const innerValue = ref(props.modelValue)
const isFocus = ref(false)
const passwordVisible = ref(false)

const showClear = computed(()=>
  props.clearable &&
  !props.disabled &&
  !!innerValue.value &&
  isFocus.value
)
const showPasswordArea = computed(()=>
  props.showPassword &&
  !props.disabled &&
  !!innerValue.value
)
const togglePasswordVisible = ()=>{
  passwordVisible.value = !passwordVisible.value
}
const handleInput = () =>{
  emits('update:modelValue',innerValue.value)
}
const handleFocus = () => {
  isFocus.value = true
}
const handleBlur = () =>{
  isFocus.value = false
}
const clear = ()=>{
  innerValue.value = ''
  emits('update:modelValue','')
}
watch(()=>props.modelValue,(newValue)=>{
  innerValue.value = newValue
})
</script>

<template>
  <div
   class="yun-input"
   :class="{
    [`yun-input--${type}`]:type,
    [`yun-input--${size}`]:size,
    'is-disabled': disabled,
    'is-prepend': $slots.prepend,
    'is-append': $slots.append,
    'is-prefix': $slots.prefix,
    'is-suffix': $slots.suffix,
    'is-focus':isFocus
   }"
   @input="handleInput"
   @focus="handleFocus"
   @blur="handleBlur"
   >
   <!-- input -->
   <template v-if="type !== 'textarea'">
    <!-- prepend slot -->
    <div v-if="$slots.prepend" class="yun-input__prepend">
      <slot name="prepend" />
    </div>
    <div class="yun-input__wrapper">
      <!-- prefix slot -->
      <span v-if="$slots.prefix" class="yun-input__prefix">
          <slot name="prefix" />
      </span>
      <input
       class="yun-input__inner"
       :type="showPassword?(passwordVisible?'text':'password'):type"
       :disabled="disabled"
       v-model="innerValue"
       @input="handleInput"

        @focus="handleFocus"
        @blur="handleBlur"
       >
       <!-- suffix slot -->
        <span v-if="$slots.suffix || showClear ||showPasswordArea" class="yun-input__suffix">
          <slot name="suffix"></slot>
          <Icon
            icon="circle-xmark"
            v-if="showClear"
            class="yun-input__clear"
            @click="clear"
          />
          <Icon 
            icon="eye"
            v-if="showPasswordArea && passwordVisible"
            class="yun-input__password"
            @click="togglePasswordVisible"
          />
          <Icon 
            icon="eye-slash"
            v-if="showPasswordArea && !passwordVisible"
            class="yun-input__password"
            @click="togglePasswordVisible"
          />
        </span>
     </div>
  </template>
   <!-- textarea -->
  <template v-else>
    <textarea 
      class="yun-text__wrapper"
      :disabled="disabled"
      v-model="innerValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    ></textarea>
  </template>
   </div>
</template>