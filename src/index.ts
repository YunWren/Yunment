import type { App, Plugin } from 'vue'
import './styles/index.css'

// 组件导入部分
import Button from './components/Button/Button.vue'
import Input from './components/Input/Input.vue'
import Alert from './components/Alert/Alert.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import Form from './components/Form/Form.vue'
import FormItem from './components/Form/FormItem.vue'
import Icon from './components/Icon/Icon.vue'
import Message from './components/Message/Message.vue'
import Select from './components/Select/Select.vue'
import Switch from './components/Switch/Switch.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'


// ========== 类型导出 ==========
export type {
  Button as YButtonType,
  Input as YInputType,
  Alert as YAlertType,
  Collapse as YCollapseType,
  CollapseItem as YCollapseItemType,
  Dropdown as YDropdownType,
  Form as YFormType,
  FormItem as YFormItemType,
  Icon as YIconType,
  Message as YMessageType,
  Select as YSelectType,
  Switch as YSwitchType,
  Tooltip as YTooltipType
}

// ========== 实例导出 ==========
export {
  Button as YButton,
  Input as YInput,
  Alert as YAlert,
  Collapse as YCollapse,
  CollapseItem as YCollapseItem,
  Dropdown as YDropdown,
  Form as YForm,
  FormItem as YFormItem,
  Icon as YIcon,
  Message as YMessage,
  Select as YSelect,
  Switch as YSwitch,
  Tooltip as YTooltip
}

// ========== 插件注册 ==========
const components = {
  YButton: Button,
  YInput: Input,
  YAlert: Alert,
  YCollapse: Collapse,
  YCollapseItem: CollapseItem,
  YDropdown: Dropdown,
  YForm: Form,
  YFormItem: FormItem,
  YIcon: Icon,
  YMessage: Message,
  YSelect: Select,
  YSwitch: Switch,
  YTooltip: Tooltip
}

export type YunElementPlugin = Plugin & {
  install: (app: App) => void
}

const YunElement: YunElementPlugin = {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}

export default YunElement