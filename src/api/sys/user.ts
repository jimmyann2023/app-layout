import type { BaseResponse } from '@/utils/http/request';
import { request } from '@/utils/http/request';

import { GetUserInfoModel, LoginParams, LoginResultModel } from './model/userModel';

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
}

export function updateAccountInfo(data: any) {
  return request<BaseResponse<any>>({
    url: 'account/update',
    method: 'post',
    data,
  });
}

/**
 * @description: user login api
 */
export function loginApi(data: LoginParams) {
  return request<LoginResultModel>({
    url: Api.Login,
    method: 'post',
    data,
  });
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return request<GetUserInfoModel>({
    url: Api.GetUserInfo,
    method: 'get',
  });
}

export function getPermCode() {
  return request<string[]>({
    url: Api.GetPermCode,
    method: 'get',
  });
}

export function doLogout() {
  return request({
    url: Api.Logout,
    method: 'get',
  });
}

export function testRetry() {
  return request<BaseResponse<any>>({
    url: Api.TestRetry,
    method: 'get',
  });
}
