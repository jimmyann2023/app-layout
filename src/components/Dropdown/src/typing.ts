export interface DropMenu {
  onClick?: Fn;
  to?: string;
  icon?: string;
  event: string | number;
  text: string;
  disabled?: boolean;
  divider?: boolean;
}
/**
 * 字符串类型对象
 */
export type Recordable<T = any> = Record<string, T>;
