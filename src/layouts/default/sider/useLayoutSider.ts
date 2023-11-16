import { computed, unref } from 'vue';
import { useMenuSetting } from '@/hooks/setting/useMenuSetting';
import { useAppStore } from '@/store/modules/app';

/**
 * Handle related operations of menu events
 */
export function useSiderEvent() {
  const appStore = useAppStore();
  const { getMiniWidthNumber } = useMenuSetting();

  const getCollapsedWidth = computed(() => {
    return unref(getMiniWidthNumber);
  });

  function onBreakpointChange(broken: boolean) {
    appStore.setProjectConfig({
      menuSetting: {
        siderHidden: broken,
      },
    });
  }

  return { getCollapsedWidth, onBreakpointChange };
}
