<script setup lang="ts">
import { createPopper, type Instance } from '@popperjs/core';
import type { TooltipEmits,Tooltipinstance,TooltipProps } from './types'
import { ref, watch,reactive, onUnmounted, computed } from 'vue'
import useClickOutside from '../../hooks/useClickOutside'
import { debounce } from 'lodash-es'
const emits = defineEmits<TooltipEmits>()
const props = withDefaults(defineProps<TooltipProps>(),{
  placement:'bottom',
  trigger:'hover',
  transition:'fade',
  openDelay:0,
  closeDelay:0,
})
const isOpen = ref(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()
let popperInstance:null | Instance = null
let events:Record<string,any> = reactive({})
let outerEvents:Record<string,any> = reactive({})
const popperOptions = computed(()=>{
  return {
    placement: props.placement,
    modifiers:[{
      name:'offset',
      options:{
        offset:[0,9]
      }
    }],
    ...props.popperOptions
  }
})
const open = ()=>{
    isOpen.value = true
    emits('visible-change',true)
}
const close = ()=>{
    isOpen.value = false
    emits('visible-change',false)
}
const openDebounce = debounce(open,props.openDelay)
const closeDebounce = debounce(close,props.closeDelay)
const togglePopper = () => {
  if(isOpen.value){
    closeFinal()
  }else{
    openFinal()
  }
}
const openFinal =()=>{
  closeDebounce.cancel()
  openDebounce()
}
const closeFinal =()=>{
  openDebounce.cancel()
  closeDebounce()
}
useClickOutside(popperContainerNode,()=>{
  if(props.trigger === 'click' && isOpen.value && !props.manual)
    closeFinal()
})
const attachEvents = ()=>{
  if(props.trigger === 'hover'){
    events['mouseenter'] = openFinal
    outerEvents['mouseleave'] = closeFinal
  } else if(props.trigger === 'click') {
    events['click'] = togglePopper
    // console.log('触发了', props.trigger);
    
  }
}
if(!props.manual){
  attachEvents()
}
watch(()=> props.trigger,(newTrigger,oldTrigger) =>{
  if(newTrigger !== oldTrigger) {
    events = {}
    outerEvents = {}
    attachEvents()
  }
}
)
watch(()=> props.manual,(isManual)=>{
  if(isManual){
    events = {}
    outerEvents = {}
  }else{
    attachEvents()
  }
})
watch(isOpen, (newvalue)=>{
  if(newvalue){
    if(triggerNode.value && popperNode.value){
      popperInstance = createPopper(triggerNode.value,popperNode.value,popperOptions.value)
    }
    else{
      popperInstance?.destroy()
    }
  }
},{ flush:'post' })
onUnmounted(()=>
  popperInstance?.destroy()
)
defineExpose<Tooltipinstance>({
  'show':openFinal,
  'hide':closeFinal
})
</script>
<template>
  <div class="yun-tooltip" v-on="outerEvents" ref="popperContainerNode">
    <div class="yun-tooltip__tirgger" ref="triggerNode"
      v-on="events"
    >
      <slot></slot>
    </div>
    <Transition :name="transition">
      <div
        v-if="isOpen"
        class="yun-tooltip__popper" 
        :class="{'is-dark':dark}"
        ref="popperNode">
      <slot name="content">{{ content }}</slot>
      <div id="arrow" data-popper-arrow></div>
    </div>
    </Transition>
    
  </div>
</template>