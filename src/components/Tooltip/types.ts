
import type { Placement, Options } from "@popperjs/core"
export interface TooltipProps {
  content?: string,
  trigger?: 'hover' | 'click',
  placement?: Placement,
  manual?: boolean,
  popperOptions?: Partial<Options>,
  transition?: string,
  openDelay?: number,
  closeDelay?: number,
  dark?: boolean,
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void,
}

export interface Tooltipinstance {
  show: () => void,
  hide: () => void,
}