import { defineComponent } from 'vue';
import type { RouteMeta, RouteRecordRaw } from 'vue-router';

import { RoleEnum } from '@/enums/roleEnum';

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}

export interface MenuTag {
  // 类型
  type?: 'primary' | 'error' | 'warn' | 'success';
  // 内容
  content?: string;
  // 为true则显示小圆点
  dot?: boolean;
}

export interface Menu {
  //  菜单名
  name: string;
  // 菜单图标,如果没有，则会尝试使用route.meta.icon
  icon?: string;

  img?: string;
  // 菜单路径
  path: string;

  // path contains param, auto assignment.
  paramPath?: string;

  disabled?: boolean;

  children?: Menu[];

  orderNo?: number;

  roles?: RoleEnum[];

  meta?: Partial<RouteMeta>;
  // 菜单标签设置
  tag?: MenuTag;
  // 是否隐藏菜单
  hideMenu?: boolean;
}

export interface MenuModule {
  orderNo?: number;
  menu: Menu;
}

// export type AppRouteModule = RouteModule | AppRouteRecordRaw;
export type AppRouteModule = AppRouteRecordRaw;
