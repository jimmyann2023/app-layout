import { tryOnMounted, tryOnUnmounted, useDebounceFn } from '@vueuse/core';

/**
 * 任意类型的异步函数
 */
type AnyPromiseFunction = (...arg: any[]) => PromiseLike<any>;

/**
 * 任意类型的普通函数
 */
type AnyNormalFunction = (...arg: any[]) => any;

/**
 * 任意类型的函数
 */
export type AnyFunction = AnyNormalFunction | AnyPromiseFunction;

interface UseWindowSizeOptions {
  wait?: number;
  once?: boolean;
  immediate?: boolean;
  listenerOptions?: AddEventListenerOptions | boolean;
}

function useWindowSizeFn(fn: AnyFunction, options: UseWindowSizeOptions = {}) {
  const { wait = 150, immediate } = options;
  let handler = () => {
    fn();
  };
  const handleSize = useDebounceFn(handler, wait);
  handler = handleSize;

  const start = () => {
    if (immediate) {
      handler();
    }
    window.addEventListener('resize', handler);
  };

  const stop = () => {
    window.removeEventListener('resize', handler);
  };

  tryOnMounted(() => {
    start();
  });

  tryOnUnmounted(() => {
    stop();
  });
  return { start, stop };
}

export { useWindowSizeFn, type UseWindowSizeOptions };
