<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Icon from '@/components/Icon/Icon.vue'
import type {MessageProps} from './types'
import RenderVnode from '@/components/Common/RenderVnode'
import { log } from 'console';
const props = withDefaults(defineProps<MessageProps>(), {
  type:'info',
  duration:3000
})
const visible = ref(false)
function startTimer() {
  if (props.duration === 0) return
  setTimeout(() => {
    visible.value = false
    
  }, props.duration)
}
onMounted (()=>{
  visible.value = true
  startTimer()
})
defineExpose({
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