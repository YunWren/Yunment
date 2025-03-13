import type { ComponentInternalInstance, VNode } from "vue"
export interface MessageProps {
  message?: string | VNode,
  duration?: number,
  showClose?: boolean,
  type?: 'success' | 'info' | 'warning' | 'error',
  onDestory: () => void,
  id: string
  offset?: number,
  zIndex: number,
}

export interface MessageContext {
  id: string,
  vm: ComponentInternalInstance,
  vnode: VNode,
  props: MessageProps,
  destory: () => void,
}

export type createMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>