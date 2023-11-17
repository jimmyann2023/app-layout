<template>
  <Drawer />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Drawer } from 'ant-design-vue';
import { basicProps } from './props';

export default defineComponent({
  components: { Drawer },
  inheritAttrs: false,
  props: basicProps,
  emits: ['open-change', 'ok', 'close', 'register'],
});
</script>
