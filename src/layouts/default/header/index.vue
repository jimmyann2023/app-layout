<template>
  <Layout.Header :class="getHeaderClass">aaa</Layout.Header>
</template>

<script lang="ts" setup>
import { computed, unref } from 'vue';
import { Layout } from 'ant-design-vue';
import { useDesign } from '@/hooks/web/useDesign';

defineOptions({ name: 'LayoutHeader' });
const props = defineProps({
  fixed: Boolean,
});

const { prefixCls } = useDesign('layout-header');
const getHeaderClass = computed(() => {
  const theme = unref('getHeaderTheme');
  return [
    prefixCls,
    {
      [`${prefixCls}--fixed`]: props.fixed,
      [`${prefixCls}--mobile`]: unref('getIsMobile'),
      [`${prefixCls}--${theme}`]: theme,
    },
  ];
});
</script>
<style lang="less">
@import url('./index.less');
</style>
