import { describe, expect, test, vi } from "vitest"
import { mount } from "@vue/test-utils"
import Collapse from "./Collapse.vue"
import CollapseItem from './CollapseItem.vue'
describe('Collapse.vue', () => {
  test('basic collapse', async () => {
    const onChange = vi.fn()
    const wrapper = mount(() =>
      <Collapse modelValue={['a']} onChange={onChange}>
        <CollapseItem name='a' title="title A">content A</CollapseItem>
        <CollapseItem name='b' title="title B">content B</CollapseItem>
        <CollapseItem name='c' title="title C" disabled>content C</CollapseItem>
      </Collapse>
      , {
        global: {
          stubs: ['Icon']
        },
        attachTo: document.body
      })
    const headers = wrapper.findAll('.yun-collapse-item__header')
    const contents = wrapper.findAll('.yun-collapse-item__wrapper')
    // 长度
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)
    //内容
    const firstContent = contents[0]
    const secondContent = contents[1]
    const disabledContent = contents[2]
    expect(firstContent.isVisible()).toBeTruthy()
    expect(secondContent.isVisible()).toBeFalsy()
    expect(firstContent.text()).toBe('content A')
    //行为
    const firstHeader = headers[0]
    const secondHeader = headers[1]
    await firstHeader.trigger('click')
    expect(firstContent.isVisible()).toBeFalsy()
    expect(onChange).toHaveBeenCalledWith([])
    await secondHeader.trigger('click')
    expect(secondContent.isVisible()).toBeTruthy()
    expect(onChange).toHaveBeenCalledWith(['b'])
    //disabled
    const disableHeader = headers[2]
    expect(disableHeader.classes()).toContain('is-disabled')
    await disableHeader.trigger('click')
    expect(disabledContent.isVisible()).toBeFalsy()
  })
})