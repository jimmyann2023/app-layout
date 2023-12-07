import { Spin } from 'ant-design-vue';
import {
  AsyncComponentLoader,
  Component,
  ComponentPublicInstance,
  defineAsyncComponent,
  // FunctionalComponent, CSSProperties
} from 'vue';

import { noop } from '@/utils';

// const Loading: FunctionalComponent<{ size: 'small' | 'default' | 'large' }> = (props) => {
//   const style: CSSProperties = {
//     position: 'absolute',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };
//   return (
//     <div style={style}>
//       <Spin spinning={true} size={props.size} />
//     </div>
//   );
// };

interface Options {
  size?: 'default' | 'small' | 'large';
  delay?: number;
  timeout?: number;
  loading?: boolean;
  retry?: boolean;
}

export function createAsyncComponent<
  T extends Component = {
    new (): ComponentPublicInstance;
  },
>(loader: AsyncComponentLoader<T>, options: Options = {}) {
  const { size = 'small', delay = 100, timeout = 30000, loading = false, retry = true } = options;
  return defineAsyncComponent({
    //加载函数
    loader,

    // 加载异步组件时使用的组件
    loadingComponent: loading ? <Spin spinning={true} size={size} /> : undefined,

    // 加载失败后展示的组件
    // errorComponent

    // Defining if component is suspensible. Default: true.
    // suspensible: false,

    // 展示加载组件前的延迟时间，默认为 100ms
    delay,

    // 如果提供了一个 timeout 时间限制，并超时了
    // 也会显示这里配置的报错组件，默认值是：Infinity
    timeout,

    /**
     *
     * @param {*} error Error message object
     * @param {*} retry A function that indicating whether the async component should retry when the loader promise rejects
     * @param {*} fail  End of failure
     * @param {*} attempts Maximum allowed retries number
     */
    onError: !retry
      ? noop
      : (error, retry, fail, attempts) => {
          if (error.message.match(/fetch/) && attempts <= 3) {
            // retry on fetch errors, 3 max attempts
            retry();
          } else {
            // Note that retry/fail are like resolve/reject of a promise:
            // one of them must be called for the error handling to continue.
            fail();
          }
        },
  });
}
