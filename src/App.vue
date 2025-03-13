<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import { ref, onMounted, h } from 'vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Icon from './components/Icon/Icon.vue'
import myAlert from './components/Alert/myAlert.vue'
import type { ButtonInstance } from '@/components/Button/types'
import type { Tooltipinstance } from './components/Tooltip/types'
import Dropdown from './components/Dropdown/Dropdown.vue'
import type { MenuOption } from './components/Dropdown/types'
import Message from './Message/Message.vue'
import { createMessage } from './Message/method'
const buttonRef = ref<ButtonInstance | null>(null)
const trigger = ref<any>('click')
const dropdownTrigger = ref<any>('click')
const openedValue =ref([])
const tooltipRef = ref<Tooltipinstance|null>(null)
const options:MenuOption[] = [
  {key:1,label:h('b','this is testA')},
  {key:2,label:'item 2',disabled:true},
  {key:3,label:'item 3',divided:true},
  {key:4,label:'item 4'},  
]

onMounted(() => {
  const instance = createMessage({message:'hello world',duration:0})
  createMessage({message:'hello world 2',duration:0})
  createMessage({message:'hello world 3',duration:0})
  if (buttonRef.value) {
    // console.log('buttonRefvalue', buttonRef.value)
    // console.log('buttonRef', buttonRef.value.ref)
  }
  setTimeout(() => {
    // openedValue.value=['a','b']
    // trigger.value = 'hover'
    instance.destory()
  }, 2000)
})
const open =()=>{
  tooltipRef.value?.show()

  // console.log('open');
}
const close =()=>{
  tooltipRef.value?.hide()
  // console.log('close');
}
  
</script>

<template>
  <header>
    <Tooltip dark :trigger="trigger" ref="tooltipRef" :close-delay="300" :open-delay="300">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="300" height="300" />
      <template #content>
        <h1>Hello Tooltip</h1>
      </template>
    </Tooltip>
  </header>
  <main>
    <Icon icon="fas fa-cloud" type="primary" color="rbg(97, 149, 170)" size="2xl"/>
    <h2><b>基础按钮展示</b></h2><br>
    <Button ref="buttonRef" @click="open">Test Button</Button>
    <Button plain @click="close">Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>yun</Button>
    <Button disabled>Disabled Button</Button><br/><br/>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br/><br/>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br/><br/>
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br/><br/>  
    <Button size="large" loading>loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br/><br/>  
    <h2><b>手风琴组件展示</b></h2><br>
    <Collapse v-model="openedValue" accordion>
      <Item name="a">
        <!-- 此处name会传给CollapseItem.vue的name -->
        <template #title>
          <h1>nice title</h1>
        </template>
        <h1>headline title</h1>
        <div> this is content a AAA</div>
      </Item>
      <Item name="b" title="nice title b item b">
        <div> this is BBB test </div>
      </Item>
      <Item name="c" title="nice ccc" disabled>
        <div>this is ccc test</div>
      </Item>
    </Collapse>
    <br/><br/>
    <h2><b>Alert 组件样式展示</b></h2><br>
    <myAlert type="primary" closable>this is a alert abot Primary</myAlert>
    <myAlert type="success" closable>this is a alert abot Success</myAlert>
    <myAlert type="warning" closable>this is a alert abot Warning</myAlert>
    <myAlert type="danger" closable>this is a alert abot Danger</myAlert>
    <myAlert type="info" closable>this is a alert abot Info</myAlert>
    <myAlert type="primary" effect closable>this is a alert abot effect Primary</myAlert>
    <myAlert type="success" effect closable>this is a alert abot effect Success</myAlert>
    <myAlert type="warning" effect closable>this is a alert abot effect Warning</myAlert>
    <myAlert type="danger" effect closable>this is a alert abot effect Danger</myAlert>
    <myAlert type="info" effect closable>this is a alert abot effect Info</myAlert>
    <br/><br/>
    <h2><b>Dropdown 组件样式展示</b></h2><br>
    <Dropdown placement="bottom" :trigger="dropdownTrigger" :menu-options="options">
      <Button>click me</Button>
    </Dropdown>
  </main>

</template>

<style>
div.vue-devtools__anchor {
  display: none !important;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
main {
  margin-bottom: 200px;
}
</style>
