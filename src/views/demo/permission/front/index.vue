<template>
  <PageWrapper
    title="前端权限示例"
    contentBackground
    contentClass="p-4"
    content="由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"
  >
    <CurrentPermissionMode />

    <p>
      当前角色: <a> {{ userStore.getRoleList }} </a>
    </p>
    <Alert class="mt-4" type="info" message="点击后请查看左侧菜单变化" show-icon />

    <div class="mt-4">
      权限切换(请先切换权限模式为前端角色权限模式):
      <Space>
        <Button @click="changeRole(RoleEnum.SUPER)" :type="isSuper ? 'primary' : 'default'">
          {{ RoleEnum.SUPER }}
        </Button>
        <Button @click="changeRole(RoleEnum.DEV)" :type="isDev ? 'primary' : 'default'">
          {{ RoleEnum.DEV }}
        </Button>
        <Button @click="changeRole(RoleEnum.TEST)" :type="isTest ? 'primary' : 'default'">
          {{ RoleEnum.TEST }}
        </Button>
      </Space>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
import { Alert, Button, Space } from 'ant-design-vue';
import { computed } from 'vue';

import { PageWrapper } from '@/components/Page';
import { RoleEnum } from '@/enums/roleEnum';
import { usePermission } from '@/hooks/web/usePermission';
import { useUserStore } from '@/store/modules/user';

import CurrentPermissionMode from '../CurrentPermissionMode.vue';

const { changeRole } = usePermission();
const userStore = useUserStore();

const isSuper = computed(() => userStore.getRoleList.includes(RoleEnum.SUPER));
const isTest = computed(() => userStore.getRoleList.includes(RoleEnum.TEST));
const isDev = computed(() => userStore.getRoleList.includes(RoleEnum.DEV));
</script>

<style lang="less">
.demo {
  background-color: @component-background;
}
</style>
