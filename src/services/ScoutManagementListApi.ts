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

import {
  ApiErrorString,
  DataCountScoutManagementScout,
  DataScoutManagementScoutStatsDTO,
  GetScoutListParams,
  Message,
  ScoutManagementScoutStatusDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ScoutManagementListApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description get all scout list
   *
   * @tags ScoutManagementListApi
   * @name GetScoutList
   * @summary GetScoutList
   * @request GET:/api/v1/scouts
   * @secure
   * @response `200` `DataCountScoutManagementScout` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getScoutList = (query: GetScoutListParams, params: RequestParams = {}) =>
    this.http.request<DataCountScoutManagementScout, ApiErrorString>({
      path: `/api/v1/scouts`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description get all pic
   *
   * @tags ScoutManagementListApi
   * @name GetScoutListStats
   * @summary GetScoutListStats
   * @request GET:/api/v1/scouts/stats
   * @secure
   * @response `200` `DataScoutManagementScoutStatsDTO` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getScoutListStats = (params: RequestParams = {}) =>
    this.http.request<DataScoutManagementScoutStatsDTO, ApiErrorString>({
      path: `/api/v1/scouts/stats`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update scout status by id
   *
   * @tags ScoutManagementListApi
   * @name UpdateScoutStatusById
   * @summary UpdateScoutStatusById
   * @request PUT:/api/v1/scouts/status
   * @secure
   * @response `200` `Message` Status Updated Successfully
   * @response `400` `ApiErrorString` Bad Request
   * @response `500` `ApiErrorString` Internal Server Error
   */
  updateScoutStatusById = (
    data: ScoutManagementScoutStatusDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<Message, ApiErrorString>({
      path: `/api/v1/scouts/status`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
