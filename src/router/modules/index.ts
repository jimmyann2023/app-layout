import { PageEnum } from '@/enums/pageEnum';
import { t } from '@/hooks/useI18n';
import type { AppRouteModule, AppRouteRecordRaw } from '@/router/types';
import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from './staticModules/basic';
import { mainOutRoutes } from './staticModules/mainOut';

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
// const staticModules = import.meta.glob('./staticModules/**/*.ts', { eager: true });
// const asyncModules = import.meta.glob('./asyncModules/**/*.ts', { eager: true });
// const modules = { ...staticModules, ...asyncModules };

const modules = import.meta.glob('./asyncModules/**/*.ts', { eager: true });

const routeModuleList: AppRouteModule[] = [];
// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});
// console.log('modules', modules);
export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login'),
  },
};

// 未经许可的基本路由
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  ...mainOutRoutes,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
