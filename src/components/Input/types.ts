export interface InputProps {
  type: string,
  size?: 'large' | 'small',
  modelValue: string;
  disabled?: boolean,
  clearable?: boolean,
  showPassword?: boolean,
}

export interface InputEmits {
  (e: 'update:modelValue', value: string): void,
  //input事件指的是值有变化就算
  (e: 'input', value: string): void,
  //修改了值，失去焦点触发
  (e: 'change', value: string): void,
  (e: 'focus', value: FocusEvent): void,
  (e: 'blur', value: FocusEvent): void,
  (e: 'clear'): void,
}