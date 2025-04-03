<script setup lang="ts">
import { provide } from 'vue'
import type { FormProps } from './types'
import { formContextKey } from './types'

const props = defineProps<FormProps>()
defineOptions({
  name:'yunForm'
})
provide(formContextKey,props)
</script>

<template>
  <form class="yun-form">
    <slot>
    </slot>
  </form>
</template>