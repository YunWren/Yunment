import { render, h } from "vue"
import type { MessageProps } from "./types"
import MessageConstructor from './Message.vue'

export const createMessage = (props: MessageProps) => {
  const container = document.createElement('div')
  const vnode = h(MessageConstructor, props)
  render(vnode, container)

  document.body.appendChild(container)
}

