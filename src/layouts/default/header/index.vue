<template>
  <Layout.Header :class="getHeaderClass">
    <!-- left start -->
    <div :class="`${prefixCls}-left`">
      <!-- logo -->
      <AppLogo
        v-if="getShowHeaderLogo || getIsMobile"
        :class="`${prefixCls}-logo`"
        :theme="getHeaderTheme"
        :style="getLogoWidth"
      />
      <LayoutTrigger
        v-if="
          (getShowContent && getShowHeaderTrigger && !getSplit && !getIsMixSidebar) || getIsMobile
        "
        :theme="getHeaderTheme"
        :sider="false"
      />
    </div>
    <!-- left end -->

    <!-- menu start -->
    <div v-if="getShowTopMenu && !getIsMobile" :class="`${prefixCls}-menu`">
      <LayoutMenu
        :isHorizontal="true"
        :theme="getHeaderTheme"
        :splitType="getSplitType"
        :menuMode="getMenuMode"
      />
    </div>
    <!-- menu-end -->
  </Layout.Header>
</template>

<script lang="ts" setup>
import { computed, unref } from 'vue';
import { Layout } from 'ant-design-vue';
import { AppLogo } from '@/components/Application';
import { MenuModeEnum, MenuSplitTyeEnum } from '@/enums/menuEnum';
import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';
import { useMenuSetting } from '@/hooks/setting/useMenuSetting';
// import { useRootSetting } from '@/hooks/setting/useRootSetting';
import { useAppInject } from '@/hooks/web/useAppInject';
import { useDesign } from '@/hooks/web/useDesign';
import { propTypes } from '@/utils/propTypes';
import LayoutMenu from '../menu/index.vue';
import LayoutTrigger from '../trigger/index.vue';

defineOptions({ name: 'LayoutHeader' });
const props = defineProps({
  fixed: propTypes.bool,
});

const { prefixCls } = useDesign('layout-header');
const {
  getShowTopMenu,
  getIsMixMode,
  getMenuWidth,
  getShowHeaderTrigger,
  getSplit,
  getIsMixSidebar,
} = useMenuSetting();

// const { getUseErrorHandle, getShowSettingButton, getSettingButtonPosition } = useRootSetting();

const { getHeaderTheme, getShowContent, getShowHeaderLogo } = useHeaderSetting();

const { getIsMobile } = useAppInject();

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

const getLogoWidth = computed(() => {
  if (!unref(getIsMixMode) || unref(getIsMobile)) {
    return {};
  }
  const width = unref(getMenuWidth) < 180 ? 180 : unref(getMenuWidth);
  return { width: `${width}px` };
});

const getSplitType = computed(() => {
  return unref(getSplit) ? MenuSplitTyeEnum.TOP : MenuSplitTyeEnum.NONE;
});

const getMenuMode = computed(() => {
  return unref(getSplit) ? MenuModeEnum.HORIZONTAL : null;
});
</script>
<style lang="less">
@import url('./index.less');
</style>
