import { computed } from 'vue';
import { useAppStore } from '@/store/modules/app';

import type { ProjectConfig } from '#/config';

type RootSetting = Omit<
  ProjectConfig,
  'locale' | 'headerSetting' | 'menuSetting' | 'multiTabsSetting'
>;

export function useRootSetting() {
  const appStore = useAppStore();
  const getShowLogo = computed(() => appStore.getProjectConfig.showLogo);

  function setRootSetting(setting: Partial<RootSetting>) {
    appStore.setProjectConfig(setting);
  }

  return {
    setRootSetting,
    getShowLogo,
  };
}
