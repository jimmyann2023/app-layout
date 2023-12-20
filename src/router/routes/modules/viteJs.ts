import { LAYOUT } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const vite: AppRouteModule = {
  path: '/app-vitejs',
  name: 'vite-js',
  component: LAYOUT,
  redirect: '/app-vitejs/',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
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
      name: 'vite-js-demo',
      // component: () => import('@/views/viteJs/index.vue'),
      meta: {
        title: 'demo',
      },
      children: [
        {
          path: 'less',
          name: 'vite-js-less',
          component: () => import('@/views/viteJs/index.vue'),
          meta: {
            title: 'Less',
          },
        },
        {
          path: 'scss',
          name: 'vite-js-scss',
          component: () => import('@/views/viteJs/index.vue'),
          meta: {
            title: 'Scss',
          },
        },
        {
          path: 'unocss',
          name: 'vite-js-unocss',
          component: () => import('@/views/viteJs/index.vue'),
          meta: {
            title: 'unocss',
          },
        },
        {
          path: 'vxetable',
          name: 'vite-js-vxetable',
          component: () => import('@/views/viteJs/index.vue'),
          meta: {
            title: 'vxetable',
          },
        },
        {
          path: 'jsx',
          name: 'vite-js-jsx',
          // component: () => import('@/views/viteJs/index.vue'),
          meta: {
            title: 'jsx',
          },
          children: [
            {
              path: 'jsx',
              name: 'vite-js-jsx',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'jsx',
              },
            },
            {
              path: 'ref',
              name: 'vite-js-ref',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'ref',
              },
            },
            {
              path: 'if',
              name: 'vite-js-if',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'if',
              },
            },
            {
              path: 'on',
              name: 'vite-js-on',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'on',
              },
            },
            {
              path: 'model',
              name: 'vite-js-model',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'model',
              },
            },
            {
              path: 'bind',
              name: 'vite-js-bind',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'bind',
              },
            },
            {
              path: 'slot',
              name: 'vite-js-slot',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'slot',
              },
            },
            {
              path: 'emit-props',
              name: 'vite-js-emit-props',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'emit-props',
              },
            },
            {
              path: 'emit-model',
              name: 'vite-js-emit-mode',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'emit-model',
              },
            },
            {
              path: 'emit-ref',
              name: 'vite-js-emit-ref',
              component: () => import('@/views/viteJs/index.vue'),
              meta: {
                title: 'emit-ref',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default vite;
