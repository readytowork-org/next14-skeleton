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
  DataCountTagPublicBlogKeyword,
  GetAllBlogKeywordsParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class PublicTagManagment<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description get all
   *
   * @tags PublicTagManagment
   * @name GetAllBlogKeywords
   * @summary GetAllBlogKeywords
   * @request GET:/api/v1/public/keywords
   * @secure
   * @response `200` `DataCountTagPublicBlogKeyword` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getAllBlogKeywords = (
    query: GetAllBlogKeywordsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<DataCountTagPublicBlogKeyword, ApiErrorString>({
      path: `/api/v1/public/keywords`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
