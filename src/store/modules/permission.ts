import { toRaw } from 'vue';
import { defineStore } from 'pinia';
import { PermissionModeEnum } from '@/enums/appEnum';
import { transformRouteToMenu } from '@/router/helper/menuHelper';
import { asyncRoutes } from '@/router/modules';
import type { AppRouteRecordRaw, Menu } from '@/router/types';
import projectSetting from '@/settings/projectSetting';
import { store } from '@/store';
import { flatMultiLevelRoutes } from '@/utils/helper/routerHelper';
import { filter } from '@/utils/helper/treeHelper';
import { useAppStoreWithOut } from './app';
import { useUserStore } from './user';

interface PermissionState {
  // 权限代码列表
  permCodeList: string[] | number[];

  // 路由是否动态添加
  isDynamicAddedRoute: boolean;

  // 触发菜单更新
  lastBuildMenuTime: number;

  // 后台菜单列表
  backMenuList: Menu[];
  // 菜单列表
  frontMenuList: Menu[];
}

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): PermissionState => ({
    // 权限代码列表
    permCodeList: [],
    // 路由是否动态添加
    isDynamicAddedRoute: false,
    // 触发菜单更新
    lastBuildMenuTime: 0,
    // 后台菜单列表
    backMenuList: [],
    // 菜单列表
    frontMenuList: [],
  }),
  getters: {
    getBackMenuList(state) {
      return state.backMenuList;
    },
    getFrontMenuList(state) {
      return state.frontMenuList;
    },
  },
  actions: {
    setFrontMenuList(list: Menu[]) {
      this.frontMenuList = list;
    },

    async buildRoutesAction(): Promise<AppRouteRecordRaw[]> {
      const userStore = useUserStore();
      const appStore = useAppStoreWithOut();

      let routes: AppRouteRecordRaw[] = [];
      // 将一个响应式对象变成非响应式 修改值会更新，视图不会刷新
      const roleList = toRaw(userStore.getRoleList) || [];

      const { permissionMode = projectSetting.permissionMode } = appStore.getProjectConfig;

      // 路由过滤器 在 函数filter 作为回调传入遍历使用
      const routeFilter = (route: AppRouteRecordRaw) => {
        const { meta } = route;
        // 抽出角色
        const { roles } = meta || {};

        if (!roles) return true;
        // 进行角色权限判断
        return roleList.some((role) => roles.includes(role));
      };

      const routeRemoveIgnoreFilter = (route: AppRouteRecordRaw) => {
        const { meta } = route;
        // ignoreRoute 为true 则路由仅用于菜单生成，不会在实际的路由表中出现
        const { ignoreRoute } = meta || {};
        // arr.filter 返回 true 表示该元素通过测试
        return !ignoreRoute;
      };

      switch (permissionMode) {
        // 角色权限
        case PermissionModeEnum.ROLE:
          console.log('ROLE=角色路由模式');
          break;
        // 路由映射， 默认进入该case
        case PermissionModeEnum.ROUTE_MAPPING:
          console.log('ROUTE_MAPPIN=前端路由模式');

          // 对非一级路由进行过滤
          routes = filter(asyncRoutes, routeFilter);
          // 对一级路由再次根据角色权限过滤
          routes = routes.filter(routeFilter);

          // 将路由转换成菜单
          const menuList = transformRouteToMenu(routes, true);
          // 移除掉 ignoreRoute: true 的路由 非一级路由
          routes = filter(routes, routeRemoveIgnoreFilter);
          // 移除掉 ignoreRoute: true 的路由 一级路由；
          routes = routes.filter(routeRemoveIgnoreFilter);
          // 对菜单进行排序
          menuList.sort((a, b) => {
            return (a.meta?.orderNo || 0) - (b.meta?.orderNo || 0);
          });
          // 设置菜单列表
          this.setFrontMenuList(menuList);

          // Convert multi-level routing to level 2 routing
          // 将多级路由转换为 2 级路由
          routes = flatMultiLevelRoutes(routes);
          break;
        case PermissionModeEnum.BACK:
          console.log('BACK=后端路由模式');
      }
      return [];
    },
  },
});

// 需要在设置之外使用
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}
