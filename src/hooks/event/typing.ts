/**
 * 任意类型的异步函数
 */
export type AnyPromiseFunction = (...arg: any[]) => PromiseLike<any>;

/**
 * 任意类型的普通函数
 */
export type AnyNormalFunction = (...arg: any[]) => any;

/**
 * 任意类型的函数
 */
export type AnyFunction = AnyNormalFunction | AnyPromiseFunction;
