<template>
  <span :class="`${prefixCls}__extra-fold`" @click="openDrawer(true)">
    <Icon icon="ion:settings-outline" />
    <SettingDrawer @register="register" />
  </span>
</template>
<script lang="ts" setup>
import { useDrawer } from '@/components/Drawer';
import Icon from '@/components/Icon/Icon.vue';
import { useDesign } from '@/hooks/web/useDesign';
import SettingDrawer from '@/layouts/default/setting/SettingDrawer';

defineOptions({ name: 'SettingButton' });

const [register, { openDrawer }] = useDrawer();
const { prefixCls } = useDesign('multiple-tabs-content');
</script>
