import { render, h, shallowReactive } from "vue"
import type { createMessageProps, MessageContext } from "./types"
import MessageConstructor from './Message.vue'
import useZIndex from '../../hooks/useZIndex';
import exp from "constants";
const { nextZIndex } = useZIndex()
const instances: MessageContext[] = shallowReactive([])
let seed = 1
export const createMessage = (props: createMessageProps) => {
  const id = `message_${seed++}`
  const container = document.createElement('div')
  const destory = () => {
    const idx = instances.findIndex(instance => instance.id === id)
    if (idx === -1) return
    instances.splice(idx, 1)
    render(null, container)
  }
  const manualDestory = () => {
    const instance = instances.find(instance => instance.id === id)
    if (instance) {
      instance.vm.exposed!.visible.value = false
    }
  }
  const newProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestory: destory
  }
  const vnode = h(MessageConstructor, newProps)
  render(vnode, container)
  //非空断言操作符
  document.body.appendChild(container.firstElementChild!)
  const vm = vnode.component!
  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
    destory: manualDestory,
  }
  instances.push(instance)
  return instance
}

export const getLastInstance = () => {
  //获取最后一项
  return instances.at(-1)
}
export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex(instances => instances.id === id)
  if (idx <= 0) { return 0 }
  else {
    const prev = instances[idx - 1]
    return prev.vm.exposed!.bottomOffset.value
  }
}

export const closeAll = () => {
  instances.forEach(instance => {
    instance.destory()
  })
}
