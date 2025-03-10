export type AlertType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export interface MyAlertProps {
  type?: AlertType
  effect?: boolean
  closable?: boolean
  content?: string
}

export interface MyAlertEmits {
  (e: 'close'): void
}