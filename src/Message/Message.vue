<script setup lang="ts">
import { onMounted, ref, computed,nextTick } from 'vue'
import Icon from '@/components/Icon/Icon.vue'
import type {MessageProps} from './types'
import RenderVnode from '@/components/Common/RenderVnode'
import { watch } from 'vue';
import { getLastBottomOffset } from './method';

const props = withDefaults(defineProps<MessageProps>(), {
  type:'info',
  duration:3000,
  offset:20,
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
function startTimer() {
  if (props.duration === 0) return
  setTimeout(() => {
    visible.value = false 
  }, props.duration)
}
onMounted (async()=>{
  visible.value = true
  startTimer()
  await nextTick(),
  height.value = messageRef.value!.getBoundingClientRect().height
})


watch(visible,(newVlaue)=>{
  if(!newVlaue){
    props.onDestory()
  }
})
defineExpose({
  bottomOffset,
  visible
})
</script>

<template>
  <div
    class="yun-message"
    v-show="visible"
    role="alert"
    :class="{
      [`yun-message--${type}`]: type,
      'is-close':showClose}"
    ref="messageRef"
    :style="cssStyle"
  >
    <div class="yun-message__content">
      <slot>
        {{ offset }} -- {{ topOffset }} -- {{ height }} -- {{ bottomOffset }}
        <RenderVnode v-if="message" :vNode="message"/>
      </slot>
    </div>
    <div class="yun-message__close" v-if="showClose">
      <Icon @click.stop="visible = false" icon="xmark"></Icon>
    </div>
  </div>
</template>

<style>
.yun-message {
  width: max-content;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translate(-50%);
  border: 1px solid blue;
}
</style>