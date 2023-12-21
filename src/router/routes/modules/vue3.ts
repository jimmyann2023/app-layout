import { getParentLayout, LAYOUT } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const vue3: AppRouteModule = {
  path: '/app-vue3',
  name: 'vue3',
  component: LAYOUT,
  redirect: '/app-vue3/',
  meta: {
    orderNo: 20,
    icon: 'simple-icons:vuetify',
    title: 'vue3',
  },
  children: [
    {
      path: '/app-vue3/',
      name: 'vue3Home',
      component: () => import('@/views/vue3/index.vue'),
      meta: {
        // affix: true,
        title: 'home',
      },
    },
    {
      path: 'demo',
      name: 'Demo',
      component: getParentLayout('Demo'),
      meta: {
        title: 'demo',
      },
      children: [
        {
          path: 'less',
          name: 'less',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'less',
          },
        },
        {
          path: 'unocss',
          name: 'uncoss',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'unocss',
          },
        },
        {
          path: 'ref',
          name: 'ref',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'ref',
          },
        },
        {
          path: 'shallowRef',
          name: 'shallowRef',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'shallowRef',
          },
        },
        {
          path: 'reactive',
          name: 'reactive',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'reactive',
          },
        },
        {
          path: 'shallowReactive',
          name: 'shallowReactive',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'shallowReactive',
          },
        },
        {
          path: 'toRef',
          name: 'toRef',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'toRef',
          },
        },
        {
          path: 'provider',
          name: 'Provider',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'Provider',
          },
        },
        {
          path: 'PropsEmits',
          name: 'PropsEmits',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'PropsEmits',
          },
        },
        {
          path: 'modelEmits',
          name: 'ModelEmits',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'ModelEmits',
          },
        },
        {
          path: 'refEmits',
          name: 'RefEmits',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'RefEmits',
          },
        },
        {
          path: 'vslot',
          name: 'Vslot',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'Vslot',
          },
        },
        {
          path: 'computed',
          name: 'Computed',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'Computed',
          },
        },
        {
          path: 'watch',
          name: 'Watch',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'Watch',
          },
        },
        {
          path: 'watchEffect',
          name: 'WatchEffect',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'WatchEffect',
          },
        },
        {
          path: 'attribute',
          name: 'Attribute',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'Attribute',
          },
        },
        {
          path: 'tab',
          name: 'tab',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'tab',
          },
        },
        {
          path: 'vxetable',
          name: 'vxetable',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'vxetable',
          },
        },
        {
          path: 'anynComponent',
          name: 'AnynComponent',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'AnynComponent',
          },
        },
        {
          path: 'jsx',
          name: 'JSX',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'jsx',
          },
        },
        {
          path: 'pinia',
          name: 'Pinia',
          component: () => import('@/views/vue3/index.vue'),
          meta: {
            title: 'pinia',
          },
        },
      ],
    },
    {
      path: 'demo/about',
      name: 'about',
      component: () => import('@/views/vue3/index.vue'),
      meta: {
        title: 'About',
      },
    },
  ],
};

export default vue3;
