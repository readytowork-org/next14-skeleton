/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ApiErrorString, DataProfileCUser } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class UserApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description get user profile
   *
   * @tags UserApi
   * @name GetUserProfile
   * @summary User Profile
   * @request GET:/api/v1/profile
   * @secure
   * @response `200` `DataProfileCUser` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getUserProfile = (params: RequestParams = {}) =>
    this.http.request<DataProfileCUser, ApiErrorString>({
      path: `/api/v1/profile`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
