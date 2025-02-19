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

import { ApiErrorString, DataArrayTagList } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class TagManagementApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieve all tags
   *
   * @tags TagManagementAPI
   * @name GetAllTags
   * @summary GetAllTags
   * @request GET:/api/v1/tags
   * @secure
   * @response `200` `DataArrayTagList` List of all tags
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getAllTags = (params: RequestParams = {}) =>
    this.http.request<DataArrayTagList, ApiErrorString>({
      path: `/api/v1/tags`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
