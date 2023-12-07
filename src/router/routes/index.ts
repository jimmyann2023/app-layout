import { PageEnum } from '@/enums/pageEnum';
import { t } from '@/hooks/web/useI18n';
import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '@/router/routes/basic';
import type { AppRouteModule, AppRouteRecordRaw } from '@/router/types';

import { mainOutRoutes } from './mainOut';

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/**/*.ts', { eager: true });

const routeModuleList: AppRouteModule[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});
// TODO: 暂时排除 微服务的 vite
const excludeRoute = routeModuleList.filter((item) => {
  return item.name !== 'vite';
});

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...excludeRoute];
console.log('asyncRoutes', asyncRoutes);
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

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  ...mainOutRoutes,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  // TODO: 这里暂时通过 还没有添加 路由守卫
  ...asyncRoutes,
];
