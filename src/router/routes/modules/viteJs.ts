import { RoleEnum } from '@/enums/roleEnum';
import { getParentLayout, LAYOUT } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const vite: AppRouteModule = {
  path: '/app-vitejs',
  name: 'vite-js',
  component: LAYOUT,
  redirect: '/app-vitejs/',
  meta: {
    orderNo: 10,
    icon: 'file-icons:vite',
    title: 'vite-js',
  },
  children: [
    {
      path: 'home',
      name: 'vite-js-Home',
      component: () => import('@/views/viteJs/index.vue'),
      meta: {
        // affix: true,
        title: 'viteJs-Home',
      },
    },
    {
      path: 'about',
      name: 'vite-js-about',
      component: () => import('@/views/viteJs/index.vue'),
      meta: {
        title: 'viteJs-About',
      },
    },
    {
      path: 'demo',
      name: 'viteJsDemo',
      component: () => getParentLayout('viteJsDemo'),
      meta: {
        title: 'demo',
        roles: [RoleEnum.DEV, RoleEnum.SUPER],
      },
      children: [
        {
          path: 'less',
          name: 'vite-js-less',
          component: () => import('@/views/viteJs/index.vue'),
          meta: {
            roles: [RoleEnum.DEV, RoleEnum.SUPER],
            title: 'Less',
          },
        },
        {
          path: 'scss',
          name: 'vite-js-scss',
          component: () => import('@/views/viteJs/index.vue'),
          meta: {
            title: 'Scss',
            roles: [RoleEnum.DEV, RoleEnum.SUPER],
          },
        },
        {
          path: 'unocss',
          name: 'vite-js-unocss',
          component: () => import('@/views/viteJs/index.vue'),
          meta: {
            title: 'unocss',
            roles: [RoleEnum.DEV, RoleEnum.SUPER],
          },
        },
        {
          path: 'vxetable',
          name: 'vite-js-vxetable',
          component: () => import('@/views/viteJs/index.vue'),
          meta: {
            title: 'vxetable',
            roles: [RoleEnum.DEV, RoleEnum.SUPER],
          },
        },
        {
          path: 'jsx',
          name: 'vite-js-jsx',
          // component: () => import('@/views/viteJs/index.vue'),
          meta: {
            title: 'jsx',
            roles: [RoleEnum.DEV, RoleEnum.SUPER],
          },
          children: [
            {
              path: 'jsx',
              name: 'vite-js-jsx',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'jsx',
                roles: [RoleEnum.DEV, RoleEnum.SUPER],
              },
            },
            {
              path: 'ref',
              name: 'vite-js-ref',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'ref',
                roles: [RoleEnum.DEV, RoleEnum.SUPER],
              },
            },
            {
              path: 'if',
              name: 'vite-js-if',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'if',
                roles: [RoleEnum.DEV, RoleEnum.SUPER],
              },
            },
            {
              path: 'on',
              name: 'vite-js-on',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'on',
                roles: [RoleEnum.DEV, RoleEnum.SUPER],
              },
            },
            {
              path: 'model',
              name: 'vite-js-model',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'model',
                roles: [RoleEnum.DEV, RoleEnum.SUPER],
              },
            },
            {
              path: 'bind',
              name: 'vite-js-bind',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'bind',
                roles: [RoleEnum.DEV, RoleEnum.SUPER],
              },
            },
            {
              path: 'slot',
              name: 'vite-js-slot',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'slot',
                roles: [RoleEnum.DEV, RoleEnum.SUPER],
              },
            },
            {
              path: 'emit-props',
              name: 'vite-js-emit-props',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'emit-props',
                roles: [RoleEnum.DEV, RoleEnum.SUPER],
              },
            },
            {
              path: 'emit-model',
              name: 'vite-js-emit-mode',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'emit-model',
                roles: [RoleEnum.DEV, RoleEnum.SUPER],
              },
            },
            {
              path: 'emit-ref',
              name: 'vite-js-emit-ref',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'emit-ref',
                roles: [RoleEnum.DEV, RoleEnum.SUPER],
              },
            },
          ],
        },
      ],
    },
  ],
};

export default vite;
