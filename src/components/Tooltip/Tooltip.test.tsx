import { describe, test, expect, vi, beforeEach } from "vitest"
import { mount } from "@vue/test-utils"
import Tooltip from "./Tooltip.vue"
const onVisibleChange = vi.fn()
describe('Tooltip.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  test('basic tooltip', async () => {
    const wrapper = mount(() =>
      <div>
        <div id='outside'></div>
        <Tooltip content="hello tooltip" trigger="click" onVisible-change={onVisibleChange}>
          <button id="trigger"> Trigger </button>
        </Tooltip>
      </div>
      , {
        attachTo: document.body
      })
    //静态测试
    const triggerArea = wrapper.find('#trigger')
    expect(triggerArea.exists()).toBeTruthy()
    expect(wrapper.find('.yun-tooltip__popper').exists()).toBeFalsy()
    console.log('before', wrapper.html())

    //测试点击行为
    triggerArea.trigger('click')
    await vi.runAllTimers()//等待代码计数器走完
    expect(wrapper.find('.yun-tooltip__popper').exists()).toBeTruthy()
    expect(wrapper.get('.yun-tooltip__popper').text()).toBe('hello tooltip')
    expect(onVisibleChange).toHaveBeenCalledWith(true)
    console.log('fater', wrapper.html())
    //关闭行为
    wrapper.get('#outside').trigger('click')
    await vi.runAllTimers()//等待代码计数器走完
    expect(wrapper.find('.yun-tooltip__popper').exists()).toBeFalsy()
    // expect(wrapper.get('.yun-tooltip__popper').text()).toBe('hello tooltip')
    expect(onVisibleChange).toHaveBeenCalledWith(false)
    console.log('fater', wrapper.html())

  })
})