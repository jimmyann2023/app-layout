<srcipt lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutFeatures',
  setup() {
    const prefixCls = useDesign('setting-drawer-feature');

    return {
      prefixCls,
    };
  },
});
</srcipt>

<template>
  <div>bbb</div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-setting-drawer-feature';

.@{prefix-cls} {
  display: flex;
  position: absolute;
  z-index: 10;
  top: 45%;
  right: 0;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 6px 0 0 6px;
  background-color: @primary-color;
  color: @white;
  cursor: pointer;

  svg {
    width: 1em;
    height: 1em;
  }
}
</style>
