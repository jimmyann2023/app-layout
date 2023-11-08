import { defineStore } from 'pinia';
import { LOCALE_KEY } from '@/enums/cacheEnum';
import type { LocaleType } from '@/locales/config';
import { store } from '@/store';
import { Storage } from '@/utils/Storage';

interface LocaleState {
  locale: LocaleType;
}

export const useLocaleStore = defineStore({
  id: 'app-locale',
  state: (): LocaleState => ({
    locale: Storage.get(LOCALE_KEY, 'zh_CN'),
  }),
  getters: {
    getLocale(): LocaleType {
      return this.locale ?? 'zh_CN';
    },
  },
  actions: {
    setLocale(locale: LocaleType) {
      this.locale = locale;
      Storage.set(LOCALE_KEY, locale);
    },
  },
});
// Need to be used outside the setup
export function useLocaleStoreWithOut() {
  return useLocaleStore(store);
}
