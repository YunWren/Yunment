<script setup lang="ts">
import { collapseContextKey } from './types'
import type { CollapseProps, NameType, CollapseEmits } from './types'
import { ref, provide, watch } from 'vue'
defineOptions({
  name:'YCollapse'
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
  let _activeNames = [...activeNames.value]
  if(props.accordion){
    _activeNames = [activeNames.value[0] === item?'':item]
    activeNames.value = _activeNames
  }
  else{
    const index = _activeNames.indexOf(item)
  if(index > -1){
    //如果之前存在，就删除掉之前的
    _activeNames.splice(index,1)
  }else{
    //不存在就添加
    _activeNames.push(item)
  }
  activeNames.value = _activeNames
  }
  emits('update:modelValue',_activeNames)
  emits('change',_activeNames )
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