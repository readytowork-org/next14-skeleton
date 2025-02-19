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
  DataArrayBlogSlugs,
  DataBlogDetail,
  DataCountBlogPublicList,
  GetAllPublicBlogsParams,
  GetLatestPublicBlogParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class PublicBlogManagementApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description get all
   *
   * @tags PublicBlogManagementApi
   * @name GetAllPublicBlogs
   * @summary GetAllPublicBlogs
   * @request GET:/api/v1/public/blogs
   * @response `200` `DataCountBlogPublicList` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getAllPublicBlogs = (
    query: GetAllPublicBlogsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<DataCountBlogPublicList, ApiErrorString>({
      path: `/api/v1/public/blogs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description get one blog
   *
   * @tags PublicBlogManagementApi
   * @name GetOnePublicBlog
   * @summary GetOnePublicBlog
   * @request GET:/api/v1/public/blogs/{slug}
   * @response `200` `DataBlogDetail` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getOnePublicBlog = (slug: string, params: RequestParams = {}) =>
    this.http.request<DataBlogDetail, ApiErrorString>({
      path: `/api/v1/public/blogs/${slug}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description get all
   *
   * @tags PublicBlogManagementApi
   * @name GetLatestPublicBlog
   * @summary GetLatestPublicBlog
   * @request GET:/api/v1/public/latest
   * @response `200` `DataCountBlogPublicList` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getLatestPublicBlog = (
    query: GetLatestPublicBlogParams,
    params: RequestParams = {},
  ) =>
    this.http.request<DataCountBlogPublicList, ApiErrorString>({
      path: `/api/v1/public/latest`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description get all
   *
   * @tags PublicBlogManagementApi
   * @name GetAllPublicSlugs
   * @summary GetAllPublicSlugs
   * @request GET:/api/v1/public/slugs
   * @response `200` `DataArrayBlogSlugs` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getAllPublicSlugs = (params: RequestParams = {}) =>
    this.http.request<DataArrayBlogSlugs, ApiErrorString>({
      path: `/api/v1/public/slugs`,
      method: "GET",
      format: "json",
      ...params,
    });
}
