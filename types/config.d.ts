import {
  ContentEnum,
  PermissionModeEnum,
  SessionTimeoutProcessingEnum,
  SettingButtonPositionEnum,
} from '@/enums/appEnum';
import { CacheTypeEnum } from '@/enums/cacheEnum';
import { MenuModeEnum, MenuTypeEnum, MixSidebarTriggerEnum, TriggerEnum } from '@/enums/menuEnum';
import type { LocaleType } from '@/locales/config';

// export type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';

export interface MenuSetting {
  bgColor: string;
  fixed: boolean;
  collapsed: boolean;
  siderHidden: boolean;
  canDrag: boolean;
  show: boolean;
  hidden: boolean;
  split: boolean;
  menuWidth: number;
  mode: MenuModeEnum;
  type: MenuTypeEnum;
  theme: ThemeEnum;
  topMenuAlign: 'start' | 'center' | 'end';
  trigger: TriggerEnum;
  accordion: boolean;
  closeMixSidebarOnChange: boolean;
  collapsedShowTitle: boolean;
  mixSideTrigger: MixSidebarTriggerEnum;
  mixSideFixed: boolean;
}

export interface MultiTabsSetting {
  cache: boolean;
  show: boolean;
  showQuick: boolean;
  canDrag: boolean;
  showRedo: boolean;
  showFold: boolean;
}

export interface HeaderSetting {
  bgColor: string;
  fixed: boolean;
  show: boolean;
  theme: ThemeEnum;
  // Turn on full screen
  showFullScreen: boolean;
  // Whether to show the lock screen
  useLockPage: boolean;
  // Show document button
  showDoc: boolean;
  // Show message center button
  showNotice: boolean;
  showSearch: boolean;
  showApi: boolean;
}

export interface LocaleSetting {
  showPicker: boolean;
  // Current language
  locale: LocaleType;
  // default language
  fallback: LocaleType;
  // available Locales
  availableLocales: LocaleType[];
}

export interface TransitionSetting {
  //  Whether to open the page switching animation
  enable: boolean;
  // Route basic switching animation
  basicTransition: RouterTransitionEnum;
  // Whether to open page switching loading
  openPageLoading: boolean;
  // Whether to open the top progress bar
  openNProgress: boolean;
}

export interface ProjectConfig {
  permissionCacheType: CacheTypeEnum;

  showSettingButton: boolean;

  showDarkModeToggle: boolean;

  settingButtonPosition: SettingButtonPositionEnum;

  permissionMode: PermissionModeEnum;

  sessionTimeoutProcessing: SessionTimeoutProcessingEnum;

  grayMode: boolean;

  colorWeak: boolean;

  themeColor: string;

  fullContent: boolean;

  contentMode: ContentEnum;

  showLogo: boolean;

  showFooter: boolean;

  headerSetting: HeaderSetting;

  menuSetting: MenuSetting;

  multiTabsSetting: MultiTabsSetting;

  transitionSetting: TransitionSetting;

  openKeepAlive: boolean;

  lockTime: number;

  showBreadCrumb: boolean;

  showBreadCrumbIcon: boolean;

  useErrorHandle: boolean;

  useOpenBackTop: boolean;

  canEmbedIFramePage: boolean;

  closeMessageOnSwitch: boolean;

  removeAllHttpPending: boolean;
}

export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
}
export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string;
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string;
}
