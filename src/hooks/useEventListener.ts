import { isRef, onMounted, watch, onBeforeMount, unref } from 'vue'
import type { Ref } from 'vue'

export default function useEventListener(
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  handler: (e: Event) => any
) {
  if (isRef(target)) {
    //添加对ref对象的事件绑定
    watch(target, (value, oldValue) => {
      oldValue?.removeEventListener(event, handler)
      value?.addEventListener(event, handler)
    })
  } else {
    onMounted(() => {
      target.addEventListener(event, handler)
    })
  }

  onBeforeMount(() => {
    unref(target)?.removeEventListener(event, handler)
  })
}
