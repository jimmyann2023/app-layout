import { request } from '@/utils/http/request';
import { getMenuListResultModel } from './model/menuModel';

enum Api {
  GetMenuList = '/getMenuList',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return request<getMenuListResultModel>({
    url: Api.GetMenuList,
    method: 'get',
  });
};
