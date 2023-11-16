<template>
  <Layout :class="prefixCls">
    <!-- <LayoutFeatures /> -->
    <LayoutHeader fixed />
    <Layout :class="[layoutClass, `${prefixCls}-out`]">
      <LayoutSideBar />
      <Layout :class="`${prefixCls}-main`">
        <!-- <LayoutMultipleHeader /> -->
        <LayoutContent />
        <!-- <LayoutFooter /> -->
      </Layout>
    </Layout>
  </Layout>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';
import { useDesign } from '@/hooks/web/useDesign';
import LayoutContent from './content/index.vue';
import LayoutHeader from './header/index.vue';
import LayoutSideBar from './sider/index.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: { Layout, LayoutSideBar, LayoutHeader, LayoutContent },
  setup() {
    const { prefixCls } = useDesign('default-layout');
    const layoutClass = computed(() => {
      let cls: string[] = ['ant-layout'];
      cls.push('ant-layout-auto-collapse-tabs');
      return cls;
    });
    return {
      prefixCls,
      layoutClass,
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
