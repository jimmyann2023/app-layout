<template>
  <Layout.Footer v-if="getShowLayoutFooter" ref="footerRef" :class="prefixCls">
    <div :class="`${prefixCls}__links`">
      <span>咨询热线: 0577-61318188 (工作时间: 8:30-17:30) © 1999-2029</span>
      <a>中模网 </a>
      <span>All rights reserved.</span>
      <a @click="openWindow(INTER_URL)"> 浙ICP备15039737号 </a>
    </div>
  </Layout.Footer>
</template>

<script lang="ts" setup>
import { Layout } from 'ant-design-vue';
import { computed, ref, unref } from 'vue';
import { useRouter } from 'vue-router';

import { useRootSetting } from '@/hooks/setting/useRootSetting';
import { useDesign } from '@/hooks/web/useDesign';
import { INTER_URL } from '@/settings/siteSetting';
import { openWindow } from '@/utils';

import { useLayoutHeight } from '../content/useContentViewHeight';

defineOptions({ name: 'LayoutFooter' });

const { getShowFooter } = useRootSetting();
const { currentRoute } = useRouter();
const { prefixCls } = useDesign('layout-footer');

const footerRef = ref<ComponentRef>(null);
const { setFooterHeight } = useLayoutHeight();

const getShowLayoutFooter = computed(() => {
  if (unref(getShowFooter)) {
    const footerEl = unref(footerRef)?.$el;
    setFooterHeight(footerEl?.offsetHeight || 0);
  } else {
    setFooterHeight(0);
  }
  return unref(getShowFooter) && !unref(currentRoute).meta?.hiddenFooter;
});
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-layout-footer';

.@{prefix-cls} {
  text-align: center;

  &__links {
    margin-bottom: 8px;

    span {
      color: #858a9d;
    }

    a {
      color: rgb(89 142 255 / 90%);

      // &:hover {
      //   color: @hover-color;
      // }
    }
  }
}
</style>
