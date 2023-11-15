<template>
  <Sider />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDesign } from '@/hooks/web/useDesign';
import Sider from './LayoutSider.vue';

export default defineComponent({
  name: 'SiderWrapper',
  components: { Sider },
  setup() {
    const { prefixCls } = useDesign('layout-sider-wrapper');
    return { prefixCls };
  },
});
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-layout-sider-wrapper';

.@{prefix-cls} {
  .ant-drawer-body {
    height: 100vh;
    padding: 0;
  }

  .ant-drawer-header-no-title {
    display: none;
  }
}
</style>
