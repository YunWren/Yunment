<script setup lang="ts">
import type { DropdownEmits, DropdownProps, DropdownInstance, MenuOption } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import { ref } from 'vue';
import type { Ref } from 'vue'
import type { Tooltipinstance } from '../Tooltip/types';
import RenderVnode from '../Common/RenderVnode';
const props = withDefaults(defineProps<DropdownProps>(),{hideAfterClick:true})
const emits = defineEmits<DropdownEmits>()
const visibleChange = (e:boolean)=>{
  emits('visible-change',e)
}
const itemClick = (e:MenuOption)=>{
  if(e.disabled){
    return
  }
  emits('select',e)
  if(props.hideAfterClick){
    tooltipRef.value?.hide()
  }
}
const tooltipRef = ref() as Ref<Tooltipinstance>
defineExpose<DropdownInstance>({
  show:tooltipRef.value?.show,
  hide:tooltipRef.value?.hide,
})
</script>

<template>
  <div class="yun-dropdown">
    <Tooltip
    :trigger="trigger"
    :placement="placement"
    :popper-options="popperOptions"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    @visible-change="visibleChange"
    ref="tooltipRef"
  >
  <slot></slot>
  <template #content>
    <ul class="yun-dropdown__menu">
      <template v-for="item in menuOptions" :key="item.key">
        <li v-if="item.divided" role="separator" class="divided-placeholder"></li>
        <li
          class="yun-dropdown__item"
          :class="{'is-disabled':item.disabled,'is-divided':item.divided}"
          :id="`dropdown-item-${item.key}`"
          @click="itemClick(item)"
        >
        <RenderVnode :vNode="item.label"/>
      </li>
      </template>
    </ul>
  </template>
  </Tooltip>
  </div>
</template>