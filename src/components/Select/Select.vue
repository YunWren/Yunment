<script setup lang="ts">
  import { computed, reactive, ref,watch } from 'vue'
  import type { Ref } from 'vue'
  import type { Tooltipinstance } from '../Tooltip/types'
  import type { SelectProps,SelectEmits, SelectOption,SelectStates } from './types'
  import RenderVnode from '../Common/RenderVnode'
  import Tooltip from '../Tooltip/Tooltip.vue'
  import Input from '../Input/Input.vue'
  import Icon from '../Icon/Icon.vue'
  import type { InputInstance } from '../Input/types'
  import { debounce, isFunction } from 'lodash-es'


  defineOptions({
    name:'YunSelect'
  })
  const props = withDefaults(defineProps<SelectProps>(),{
    options:()=>[]
  })
  const emits = defineEmits<SelectEmits>()
  const tooltipRef = ref() as Ref<Tooltipinstance>
  const findOption = (value:string)=>{
    const option = props.options.find(option=> option?.value === value)
    return option?option:null
  }
  const initialOption = findOption(props.modelValue)
  const states = reactive<SelectStates>({
    inputValue:initialOption?initialOption.label:'',
    selectedOption:initialOption,
    mouseHover:false,
    loading:false,
    highlightIndex:-1,
  })
  const inputRef = ref() as Ref<InputInstance>
  const isDropdownShow = ref(false)
  //索引
  const filteredOptions = ref(props.options)
  watch(()=>props.options,(newOptions)=>{
    filteredOptions.value = newOptions
  })
  
const generateFilterOption = async (searchValue:string)=>{
  if(!props.filterable) return
  if(props.filterMethod && isFunction(props.filterMethod)){
    filteredOptions.value = props.filterMethod(searchValue)
  }else if (props.remote && props.remoteMethod && isFunction(props.remoteMethod)){
    states.loading = true
    try{
      filteredOptions.value = await props.remoteMethod(searchValue)
    } catch(e){
      console.error(e)
      filteredOptions.value = []
    }finally{
      states.loading = false
    }
  }else{
    filteredOptions.value = props.options.filter(options => options.label.includes(searchValue))
  }
  states.highlightIndex = -1
}
const timeout = computed(()=> props.remote? 300:0)
const onFilter = () => {
  generateFilterOption(states.inputValue)
}
const debouceOnFilter = debounce(()=>{
  onFilter()
},timeout.value)
const filterefPlaceholder = computed(()=>{
  return(props.filterable && states.selectedOption&& isDropdownShow.value)
  ? states.selectedOption.label : props.placeholder
})
const controlDropdown = (show: boolean) => {
  if(show) {
    if(props.filterable && states.selectedOption){
      states.inputValue=''
    }
    //进行默认选项的生成
    if(props.filterable){
      generateFilterOption(states.inputValue)
    }
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
    if(props.filterable){
      states.inputValue = states.selectedOption?states.selectedOption.label:''
    }
    states.highlightIndex = -1
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}
const popperOptions: any = {
  modifiers: [
  {
    name: 'offset',
    options: {
      offset: [0, 9],
    },
  },
  {
    name: "sameWidth",
    enabled: true,
    fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
    },
    phase: "beforeWrite",
    requires: ["computeStyles"],
  }
],
}
  const toggleDropdown = () => {
    if(props.disabled) return
    
    if(isDropdownShow.value){
      // console.log('false');
      controlDropdown(false)
    }else{
      // console.log('true');
      controlDropdown(true)
    }
  }
  const itemSelect = (e:SelectOption)=> {
    if(e.disabled) return
    states.inputValue = e.label
    states.selectedOption = e
    emits('change',e.value)
    emits('update:modelValue',e.value)
    controlDropdown(false)
    inputRef.value.ref.focus()
  }
  const showClearIcon = computed(()=>{
    //可清除
    //鼠标需要悬停在上面
    //必须有选择过选项
    //input值不能为空
    return props.clearable
        && states.mouseHover
        && states.selectedOption
        && states.inputValue.trim() !== ''
  })
  //键盘交互
  const handleKeydown = (e:KeyboardEvent)=>{
    switch (e.key) {
      case 'Enter':
        if(!isDropdownShow.value) {
          controlDropdown(true)
        } else {
          if(states.highlightIndex> -1 && filteredOptions.value[states.highlightIndex])
          {
            itemSelect(filteredOptions.value[states.highlightIndex])
          }else{
            controlDropdown(false)
          }
        }
        break
      case 'Escape':
        if(isDropdownShow.value){
          controlDropdown(false)
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        if(filteredOptions.value.length > 0){
          if(states.highlightIndex === -1 || states.highlightIndex === 0){
            states.highlightIndex = filteredOptions.value.length - 1
          } else {
            states.highlightIndex--
          }
        }
        break
      case 'ArrowDown':
        e.preventDefault()
        if(filteredOptions.value.length > 0){
            if(states.highlightIndex === -1 || states.highlightIndex === (filteredOptions.value.length-1)){
              states.highlightIndex = 0
            } else {
              states.highlightIndex++
            }
          }
        break
      default:
        break;
    }
  }
  const onClear = () => {
    console.log('触发了');
    
    states.selectedOption = null
    states.inputValue = ''
    emits('clear')
    emits('change','')
    emits('update:modelValue','')
  }  
  const NOOP = () =>{}
</script>

<template>
  <div 
    class="yun-select"
    :class="{'is-disabled':disabled}"
    @click="toggleDropdown"
    @mouseenter="states.mouseHover = true"
    @mouseleave="states.mouseHover = false"
  >
    <Tooltip
      placement="bottom-start"
      ref="tooltipRef"
      manual
      :popperOptions="popperOptions"
      @click-outside="controlDropdown(false)"
    >
      <Input
       v-model="states.inputValue"
       :disabled="disabled"
       :placeholder="filterefPlaceholder"
       ref="inputRef"
       :readonly="!filterable || !isDropdownShow"
       @input="debouceOnFilter"
       @keydown = 'handleKeydown'
       >
        <template #suffix>
          <Icon
           icon="circle-xmark" 
           v-if="showClearIcon"
           class="yun-input__clear" 
           @mousedown.prevent="NOOP"
           @click.stop="onClear"
           ></Icon>
          <Icon
           v-else
           icon="angle-down" 
           class="header-angle" 
           :class="{'is-active': isDropdownShow}"></Icon>
        </template>
      </Input>
       <template #content>
        <div class="yun-select__loading" v-if="states.loading"><Icon icon="spinner" spin></Icon></div>
        <div class="yun-select__nodata" v-else-if="filterable && filteredOptions.length === 0">no matching data</div>
        <ul class="yun-select__menu" v-else> 
          <template v-for="(item,index) in filteredOptions" :key="index">
            <li
             class="yun-select__menu-item"
             :class="{
              'is-disabled':item.disabled,
              'is-selected':states.selectedOption?.value === item.value,
              'is-highlighted':states.highlightIndex === index
              }"
             :id="`select-item-${item.value}`"
             @click.stop="itemSelect(item)"
             
             >
             <RenderVnode :vNode="renderLabel ? renderLabel(item):item.label"></RenderVnode>
            </li>
          </template>
        </ul>
       </template>
    </Tooltip>
  </div>
</template> 