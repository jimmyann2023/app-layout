<template>
  <div class="mt-2">
    当前权限模式：
    <Button type="link">
      {{ permissionMode === PermissionModeEnum.BACK ? '后台权限模式' : '前端角色权限模式' }}
    </Button>
    <Button class="ml-4" @click="togglePermissionMode" type="primary"> 切换权限模式 </Button>
    <Divider />
  </div>
</template>

<script lang="ts" setup>
import { Button, Divider } from 'ant-design-vue';
import { computed } from 'vue';

import { PermissionModeEnum } from '@/enums/appEnum';
import { usePermission } from '@/hooks/web/usePermission';
import { useAppStore } from '@/store/modules/app';
defineOptions({ name: 'CurrentPermissionMode' });

const appStore = useAppStore();
const permissionMode = computed(() => appStore.getProjectConfig.permissionMode);
const { togglePermissionMode } = usePermission();
</script>
