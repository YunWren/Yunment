import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import { wrap } from 'module'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Icon from '../Icon/Icon.vue'

describe('Button.vue', () => {
  test('basic button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'button'
      }
    })
    console.log(wrapper.html())
    expect(wrapper.classes()).toContain('yun-button--primary')
    //slot
    expect(wrapper.get('button').text()).toBe('button')
    //event
    wrapper.get('button').trigger('click')
    console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  test('disable', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      },
      slots: {
        default: 'disabled'
      }
    })
    //attributes方法获得属性
    expect(wrapper.attributes('disabled')).toBeDefined()
    //
    expect(wrapper.find('button').element.disabled).toBeDefined()
    wrapper.get('button').trigger('click')
    //trigger click事件后，emitted()会捕获到对应事件
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
  test('icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up'
      },
      slots: {
        default: 'icon'
      },
      global: {
        stubs: ['FontAwesomeIcon']
      }
    })
    const iconElement = wrapper.findComponent(FontAwesomeIcon)
    expect(iconElement.exists()).toBe(true)
    expect(iconElement.attributes('icon')).toBe('arrow-up')
  })
  test('loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: 'loading'
      },
      global: {
        stubs: ['Icon']
      }
    })
    const iconElement = wrapper.findComponent(Icon)
    expect(iconElement.exists()).toBeTruthy()
    expect(iconElement.attributes('icon')).toBe('spinner')
    expect(wrapper.attributes('disabled')).toBeDefined()
    // expect(iconElement.attributes('icon')).toBe('arrow-up')
  })
})