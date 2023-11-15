<template>
  <Layout.Sider ref="sideRef" breakpoint="lg" collapsible :class="getSiderClass" />
</template>
<script lang="ts" setup>
import { unref } from 'vue';
import { Layout } from 'ant-design-vue';
import { useDesign } from '@/hooks/web/useDesign';

defineOptions({ name: 'LayoutSideBar' });

const { prefixCls } = useDesign('layout-sideBar');

const getSiderClass = () => {
  return [
    prefixCls,
    {
      [`${prefixCls}--fixed`]: unref('getMenuFixed'),
      [`${prefixCls}--mix`]: unref('getIsMixMode') && !unref('getIsMobile'),
    },
  ];
};
</script>

<style lang="less">
@prefix-cls: ~'@{namespace}-layout-sideBar';

.@{prefix-cls} {
  z-index: @layout-sider-fixed-z-index;

  &--fixed {
    position: fixed !important;
    top: 0;
    left: 0;
    height: 100%;
  }

  &--mix {
    top: @header-height;
    height: calc(100% - @header-height);
  }

  &.ant-layout-sider-dark {
    background-color: @sider-dark-bg-color;

    .ant-layout-sider-trigger {
      background-color: @trigger-dark-bg-color;
      color: darken(@white, 25%);

      &:hover {
        background-color: @trigger-dark-hover-bg-color;
        color: @white;
      }
    }
  }

  &:not(.ant-layout-sider-dark) {
    // box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);

    .ant-layout-sider-trigger {
      border-top: 1px solid @border-color-light;
      color: @text-color-base;
    }
  }

  .ant-layout-sider-zero-width-trigger {
    z-index: 10;
    top: 40%;
  }

  & .ant-layout-sider-trigger {
    height: 36px;
    line-height: 36px;
  }
}
</style>
