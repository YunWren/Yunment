<script setup lang="ts">
import { isNil } from 'lodash'
import { inject,computed } from 'vue'
import type { FormItemProps } from './types';
import { formContextKey } from './types';
defineOptions({
  name:'YunFormItem'
})
const props = defineProps<FormItemProps>()
const formContext = inject(formContextKey)
const innerValue = computed(()=>{
const model = formContext?.model
  if(model && props.prop && !isNil(model[props.prop])){
    return model[props.prop]
  }else{
    return null
  }
})
const itemRules = computed(()=>{
  const rules = formContext?.rules
  if(rules && props.prop && rules[props.prop]){
    return rules[props.prop]
  }else{
    return[]
  }
})
</script>

<template>
  <div class="yun-form-item">
    <label class="yun-form-item__label">
      <slot name="label" :label="label">
        {{ label }}
      </slot>

    </label>
    <div class="yun-form-item__content">
      <slot></slot>
    </div>
    {{ innerValue }} -- {{ itemRules }}
  </div>
</template>