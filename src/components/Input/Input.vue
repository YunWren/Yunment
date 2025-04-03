<script setup lang="ts">
import { computed, ref, useAttrs, watch, type Ref, nextTick, inject } from 'vue'
import type { InputProps,InputEmits } from './types'
import Icon from '../Icon/Icon.vue'
import { formItemContextKey } from '../Form/types'
defineOptions({
  name:'YunInput',
  inheritAttrs:false
})
const props = withDefaults(defineProps<InputProps>(),{type:'text',autocomplete:'off'})
const emits = defineEmits<InputEmits>()
const attrs = useAttrs()
const innerValue = ref(props.modelValue)
const isFocus = ref(false)
const passwordVisible = ref(false)
const inputRef = ref() as Ref<HTMLInputElement>
const showClear = computed(()=>
  props.clearable &&
  !props.disabled &&
  !!innerValue.value &&
  isFocus.value
)
//
const formItemContext = inject(formItemContextKey)
const runValidation = (trigger?:string) =>{
  formItemContext?.validate(trigger).catch((e)=> console.log(e.errors))
}
const showPasswordArea = computed(()=>
  props.showPassword &&
  !props.disabled &&
  !!innerValue.value
)
const togglePasswordVisible = () =>{
  passwordVisible.value = !passwordVisible.value
}
const keepFocus = async () => {
  await nextTick()
  inputRef.value.focus()
}
const handleInput = () =>{
  emits('update:modelValue',innerValue.value)
  emits('input',innerValue.value)
  runValidation('input')
}
const handlechange = () =>{
  emits('change',innerValue.value)
  runValidation('change')
}
const handleFocus = (event:FocusEvent) => {
  isFocus.value = true
  emits('focus',event)
}
const handleBlur = (event:FocusEvent) =>{
  isFocus.value = false
  emits('blur',event)
  runValidation('blur')
}
const clear = ()=>{
  innerValue.value = ''
  emits('update:modelValue','')
  emits('clear')
  emits('input','')
  emits('change','')
}
const NOOP = ()=>{}
watch(()=>props.modelValue,(newValue)=>{
  innerValue.value = newValue
})
defineExpose({
  ref:inputRef
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
      ref ="inputRef"
       class="yun-input__inner"
       v-bind="attrs"
       :type="showPassword?(passwordVisible?'text':'password'):type"
       :disabled="disabled"
       :readonly="readonly"
       :autocomplete="autocomplete"
       :placeholder="placeholder"
       :autofocus="autofocus"
       :form="form"
       v-model="innerValue"
       @change="handlechange"
       @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
       >
       <!-- suffix slot -->
        <span v-if="$slots.suffix || showClear ||showPasswordArea" class="yun-input__suffix" @click="keepFocus">
          <slot name="suffix"></slot>
          <Icon
            icon="circle-xmark"
            v-if="showClear"
            class="yun-input__clear"
            @click="clear"
            @mousedown.prevent="NOOP"
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
    ref ="inputRef"
      class="yun-text__wrapper"
      v-bind="attrs"
      :disabled="disabled"
      v-model="innerValue"
      :readonly="readonly"
       :autocomplete="autocomplete"
       :placeholder="placeholder"
       :autofocus="autofocus"
       :form="form"
      @change="handlechange"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    ></textarea>
  </template>
   </div>
</template>