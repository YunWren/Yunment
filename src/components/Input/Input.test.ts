import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('Input', () => {
  it('基本展示', () => {
    // 针对动态 class，查看 classes 是否正确
    // 针对 v-if 是否渲染正确的标签以及内容
    // 针对 slots，是否渲染对应的 slots 内容
    const wrapper = mount(Input, {
      props: {
        size: 'small',
        type: 'text',
        modelValue: ''
      },
      slots: {
        prepend: 'prepend',
        prefix: 'prefix'
      }
    })
    console.log(wrapper.html())
    // classes
    expect(wrapper.classes()).toContain('yun-input--small')
    expect(wrapper.classes()).toContain('is-prepend')
    // should render input
    expect(wrapper.find('input').exists()).toBeTruthy()
    expect(wrapper.get('input').attributes('type')).toBe('text')
    // slots
    expect(wrapper.find('.yun-input__prepend').exists()).toBeTruthy()
    expect(wrapper.get('.yun-input__prepend').text()).toBe('prepend')
    //prefix
    expect(wrapper.find('.yun-input__prefix').exists()).toBeTruthy()
    expect(wrapper.get('.yun-input__prefix').text()).toBe('prefix')

    //textarea
    const wrapper2 = mount(Input, {
      props: {
        type: 'textarea',
        modelValue: ''
      }
    })
    expect(wrapper2.find('textarea').exists()).toBeTruthy()
  })
  it('支持 v-model', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
        type: 'text'
      }
    })
    //初始值
    const input = wrapper.get('input')
    expect(input.element.value).toBe('test')
    //更新值
    //会触发 input和change
    await input.setValue('update')
    expect(wrapper.props('modelValue')).toBe('update')
    expect(input.element.value).toBe('update')
    console.log('the events', wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('input')
    expect(wrapper.emitted()).toHaveProperty('change')
    //[['update'],...更多事件]
    const inputEvent = wrapper.emitted('input')
    const changeEvent = wrapper.emitted('change')
    expect(inputEvent![0]).toEqual(['update'])
    expect(changeEvent![0]).toEqual(['update'])
    //v-model 异步更新
    await wrapper.setProps({ modelValue: 'prop update' })
    expect(input.element.value).toBe('prop update')
  })
  it('点击清空字符串', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        clearable: true,
        type: 'text'
      },
      global: {
        stubs: ['Icon']
      }
    })
    //focus前面 不应该出现对应的Icon区域
    expect(wrapper.find('.yun-input__clear').exists()).toBeFalsy
    const input = wrapper.get('input')
    await input.trigger('focus')
    //出现Icon区域
    expect(wrapper.find('.yun-input__clear').exists()).toBeTruthy()
    //点击值变为空且消失
    await wrapper.get('.yun-input__clear').trigger('click')
    expect(input.element.value).toBe('')
  })
  it('支持密码切换显示', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        showPassword: true,
        type: 'text'
      },
      global: {
        stubs: ['Icon']
      }
    })
    expect(wrapper.find('.yun-input__password').exists()).toBeFalsy()
    const input = wrapper.get('input')
    expect(input.element.type).toBe('password')
    //出现Icon区域，并且Icon为特点的图标
    await input.setValue('123')
    const eyeIcon = wrapper.find('.yun-input__password')
    expect(eyeIcon.exists()).toBeTruthy()
    expect(eyeIcon.attributes('icon')).toBe('eye-slash')
    //触发后闭眼
    await eyeIcon.trigger('click')
    expect(input.element.type).toBe('text')
    expect(wrapper.find('.yun-input__password').attributes('icon')).toBe('eye')
  })
})