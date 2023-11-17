<template>
  <Layout :class="prefixCls">
    <LayoutFeatures />
    <LayoutHeader fixed v-if="getShowFullHeaderRef" />
    <Layout :class="[layoutClass, `${prefixCls}-out`]">
      <LayoutSideBar v-if="getShowSidebar || getIsMobile" />
      <Layout :class="`${prefixCls}-main`">
        <LayoutMultipleHeader />
        <LayoutContent />
        <!-- <LayoutFooter /> -->
      </Layout>
    </Layout>
  </Layout>
</template>
<script lang="ts">
import { computed, defineComponent, unref } from 'vue';
import { Layout } from 'ant-design-vue';
import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';
import { useMenuSetting } from '@/hooks/setting/useMenuSetting';
import { useMultipleTabSetting } from '@/hooks/setting/useMultipleTabSetting';
import { useAppInject } from '@/hooks/web/useAppInject';
import { useDesign } from '@/hooks/web/useDesign';
import { createAsyncComponent } from '@/utils/factory/createAsyncComponent';
import LayoutContent from './content/index.vue';
import LayoutHeader from './header/index.vue';
import LayoutMultipleHeader from './header/MultipleHeader.vue';
import LayoutSideBar from './sider/index.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    LayoutFeatures: createAsyncComponent(() => import('@/layouts/default/feature/index.vue')),
    Layout,
    LayoutSideBar,
    LayoutHeader,
    LayoutContent,
    LayoutMultipleHeader,
  },
  setup() {
    const { prefixCls } = useDesign('default-layout');
    const { getIsMobile } = useAppInject();
    const { getShowFullHeaderRef } = useHeaderSetting();
    const { getShowSidebar, getIsMixSidebar, getShowMenu } = useMenuSetting();
    console.log('getShowSidebar', getShowSidebar, 'getIsMobile', getIsMobile);
    const { getAutoCollapse } = useMultipleTabSetting();

    const layoutClass = computed(() => {
      let cls: string[] = ['ant-layout'];
      if (unref(getIsMixSidebar) || unref(getShowMenu)) {
        cls.push('ant-layout-has-sider');
      }

      if (!unref(getShowMenu) && unref(getAutoCollapse)) {
        cls.push('ant-layout-auto-collapse-tabs');
      }

      return cls;
    });
    return {
      prefixCls,
      getIsMobile,
      layoutClass,
      getShowFullHeaderRef,
      getShowSidebar,
      getIsMixSidebar,
      getShowMenu,
    };
  },
});
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-default-layout';

.@{prefix-cls} {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background-color: @content-bg;

  > .ant-layout {
    min-height: 100%;
  }

  &-main {
    width: 100%;
    margin-left: 1px;
  }
}

.@{prefix-cls}-out {
  &.ant-layout-has-sider {
    .@{prefix-cls} {
      &-main {
        margin-left: 1px;
      }
    }
  }
}
</style>
@/hooks/setting/useMultipleTabSetting
