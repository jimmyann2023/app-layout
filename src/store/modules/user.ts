import { defineStore } from 'pinia';
import { GetUserInfoModel } from '@/api/sys/model/userModel';
import { RoleEnum } from '@/enums/roleEnum';
import { store } from '@/store';
import { usePermissionStore } from '@/store/modules/permission';

import type { UserInfo } from '#/store';

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
  roleList: RoleEnum[];
  sessionTimeout?: boolean;
  lastUpdateTime: number;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    userInfo: null,
    token: undefined,
    roleList: [],
    sessionTimeout: false,
    lastUpdateTime: 0,
  }),
  getters: {
    getRoleList() {
      return ['super'];
      // return state.roleList.length > 0 ? state.roleList : getAuthCache<RoleEnum[]>(ROLES_KEY);
    },
    getUserInfoAction() {},
  },
  actions: {
    async afterLoginAction(): Promise<GetUserInfoModel | null> {
      console.log('现在===>伪装登录获取用户信息');
      const userInfo = {
        userId: '1',
        username: 'vben',
        realName: 'Vben Admin',
        avatar: '',
        desc: 'manager',
        password: '123456',
        token: 'fakeToken1',
        homePath: '/dashboard/analysis',
        roles: [
          {
            roleName: 'Super Admin',
            value: 'super',
          },
        ],
      };

      const permissionStore = usePermissionStore();
      if (!permissionStore.isDynamicAddedRoute) {
        const routes = await permissionStore.buildRoutesAction();
        console.log('routes', routes);
        // routes.forEach((route) => {
        //   router.addRoute(route as unknown as RouteRecordRaw);
        // });
        // router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw);
        // permissionStore.setDynamicAddedRoute(true);
      }
      return userInfo;
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
