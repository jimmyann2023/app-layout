import { resolve } from 'node:path';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dayjs from 'dayjs';
import { presetTypography, presetUno } from 'unocss';
import UnoCSS from 'unocss/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import PurgeIcons from 'vite-plugin-purge-icons';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

import pkg from './package.json';
import { generateModifyVars } from './src/utils/modifyVar';
const CWD = process.cwd();

// 环境变量
// const BASE_ENV_CONFIG = loadEnv('', CWD);
// const DEV_ENV_CONFIG = loadEnv('development', CWD);
// const PROD_ENV_CONFIG = loadEnv('production', CWD);

const __APP_INFO__ = {
  pkg,
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = loadEnv(mode, CWD);

  return {
    // vite config
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },

    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        // @/xxxx => src/xxxx
        {
          find: '@',
          replacement: resolve(__dirname, './src'),
        },
        // #/xxxx => types/xxxx
        {
          find: '#',
          replacement: resolve(__dirname, './types'),
        },
      ],
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => /^micro-app/.test(tag),
          },
        },
      }),
      vueJsx(),
      UnoCSS({
        presets: [presetUno(), presetTypography()],
      }),
      PurgeIcons(),
      createHtmlPlugin({
        minify: true,
      }),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [resolve(CWD, 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: '__svg__icons__dom__',
      }),
      Components({
        dts: 'types/components.d.ts',

        resolvers: [
          AntDesignVueResolver({
            importStyle: false, // css in js
          }),
        ],
      }),
    ],

    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
        // scss: {
        //   additionalData: `
        //   @use 'sass:math';
        //   @import "src/styles/global.scss";
        //   `,
        // },
      },
    },

    server: {
      host: true,
      port: 3000,
      proxy: {
        '/basic-api': {
          target: 'http://localhost:3010',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
          // only https
          // secure: false
        },
        '/upload': {
          target: 'http://localhost:3300/upload',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/upload`), ''),
        },
      },
    },

    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
      supported: {
        // https://github.com/vitejs/vite/pull/8665
        'top-level-await': true,
      },
    },
  };
});
