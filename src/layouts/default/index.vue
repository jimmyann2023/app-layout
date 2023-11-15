<template>
  <Layout :class="prefixCls">
    <LayoutHeader fixed />
    <Layout :class="[layoutClass, `${prefixCls}-out`]">
      <LayoutSideBar />
      <Layout :class="`${prefixCls}-main`">
        <div>layout -index</div>
        <RouterView />
      </Layout>
    </Layout>
  </Layout>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useDesign } from '@/hooks/web/useDesign';
import LayoutHeader from './header/index.vue';
import LayoutSideBar from './sider/index.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: { LayoutSideBar, LayoutHeader },
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
