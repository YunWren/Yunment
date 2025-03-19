<script setup lang="ts">
import { onMounted, ref, computed,nextTick } from 'vue'
import Icon from '../../components/Icon/Icon.vue'
import type { MessageProps } from './types'
import RenderVnode from '../../components/Common/RenderVnode'
import { watch } from 'vue';
import { getLastBottomOffset } from './method';
import useEventListener from '../../hooks/useEventListener'
const props = withDefaults(defineProps<MessageProps>(), {
  type:'info',
  duration:2000,
  offset:15,
  transitionName:'fade-up'
})

const visible = ref(false)
const messageRef = ref<HTMLDivElement>()
//高度计算区域
//计算高度
const height = ref(0)
//上个实例留下的最下面的坐标数字
const lastOffset = computed(()=>getLastBottomOffset(props.id))
//这个元素自己的top
const topOffset = computed(()=> props.offset + lastOffset.value)
//给下一个元素预留的offset，最低端真空的bottom
const bottomOffset = computed(() => height.value + topOffset.value)
const cssStyle = computed(()=>({
  top:topOffset.value +'px',
  zIndex:props.zIndex
}))
function keydown(e:Event){
  const event = e as KeyboardEvent
  if(event.code === 'Escape') {
    visible.value = false
  }
}
onMounted (async()=>{
  visible.value = true
  startTimer()  
})
useEventListener(document,'keydown',keydown)
let timer:any
function startTimer() {
  if (props.duration === 0) return
  timer = setTimeout(() => {
    visible.value = false 
  }, props.duration)
}
function clearTimer(){
  clearTimeout(timer)
  console.log('终止销毁')
  
}

function destoryComponent (){
  props.onDestory()
}
function updateHeight(){
  height.value = messageRef.value!.getBoundingClientRect().height
}
// watch(visible,(newVlaue)=>{
//   if(!newVlaue){
//     props.onDestory()
//   }
// })
defineExpose({
  bottomOffset,
  visible
})
</script>

<template>
  <Transition :name="transitionName" @after-leave="destoryComponent" @enter="updateHeight">
  <div
    class="yun-message"
    v-show="visible"
    role="alert"
    :class="{
      [`yun-message--${type}`]: type,
      'is-close':showClose}"
    ref="messageRef"
    :style="cssStyle"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <div class="yun-message__content">
      
      <slot>
        <RenderVnode v-if="message" :vNode="message"/>
      </slot>
    </div>
    <div class="yun-message__close" v-if="showClose">
      <Icon @click.stop="visible = false" icon="xmark"></Icon>
    </div>
  </div>
</Transition>
</template>


