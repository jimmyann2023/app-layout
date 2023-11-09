import { defineStore } from 'pinia';
import { ThemeEnum } from '@/enums/appEnum';
import { PROJ_CFG_KEY } from '@/enums/cacheEnum';
import { store } from '@/store';
import Storage from '@/utils/Storage';

import { ProjectConfig } from '#/config';
import { BeforeMiniState } from '#/store';

interface AppState {
  darkMode?: ThemeEnum;
  pageLoading: boolean;
  projectConfig: ProjectConfig | null;
  beforeMiniInfo: BeforeMiniState;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    darkMode: undefined,
    pageLoading: false,
    projectConfig: Storage.get(PROJ_CFG_KEY),
    beforeMiniInfo: {},
  }),
  getters: {
    getProjectConfig(state): ProjectConfig {
      return state.projectConfig || ({} as ProjectConfig);
    },
  },
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
