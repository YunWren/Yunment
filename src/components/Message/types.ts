import type { ComponentInternalInstance, VNode } from "vue"
export interface MessageProps {
  message?: string | VNode,
  duration?: number,
  showClose?: boolean,
  type?: 'success' | 'info' | 'warning' | 'danger',
  onDestory: () => void,
  id: string
  offset?: number,
  zIndex: number,
  transitionName?: string,
}

export interface MessageContext {
  id: string,
  vm: ComponentInternalInstance,
  vnode: VNode,
  props: MessageProps,
  destory: () => void,
}

export type createMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>