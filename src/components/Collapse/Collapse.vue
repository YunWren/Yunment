<script setup lang="ts">
import { collapseContextKey } from './types'
import type { CollapseProps, NameType, CollapseEmits } from './types'
import { ref, provide, watch } from 'vue'
defineOptions({
  name:'YunCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)
watch(()=> props.modelValue,()=>{
  activeNames.value = props.modelValue
})
  if(props.accordion && activeNames.value.length>1){
  console.warn('手风琴模式应该只有一个活动项')
}
const handleItemClick = (item:NameType) => {
  if(props.accordion){
    activeNames.value = [activeNames.value[0] === item?'':item]
  }
  else{
    const index = activeNames.value.indexOf(item)
  if(index > -1){
    //如果之前存在，就删除掉之前的
    activeNames.value.splice(index,1)
  }else{
    //不存在就添加
    activeNames.value.push(item)
  }
  }
  emits('update:modelValue',activeNames.value)
  emits('change',activeNames.value)
}
//传递给子组件
provide(collapseContextKey,{
  activeNames,
  handleItemClick
})
</script>

<template>
  <div class="yun-collapse">
    <slot></slot>
  </div>
</template>