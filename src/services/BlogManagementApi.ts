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
  ApiErrorArrayValidationError,
  ApiErrorString,
  BlogCreate,
  BlogUpdate,
  DataBlogDetail,
  DataCountBlogList,
  GetAllBlogsParams,
  Message,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BlogManagementApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description get all
   *
   * @tags BlogManagementApi
   * @name GetAllBlogs
   * @summary GetAllBlogs
   * @request GET:/api/v1/blogs
   * @secure
   * @response `200` `DataCountBlogList` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getAllBlogs = (query: GetAllBlogsParams, params: RequestParams = {}) =>
    this.http.request<DataCountBlogList, ApiErrorString>({
      path: `/api/v1/blogs`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create one Blog
   *
   * @tags BlogManagementApi
   * @name CreateBlog
   * @summary CreateBlog
   * @request POST:/api/v1/blogs
   * @secure
   * @response `201` `Message` Blog Created Successfully
   * @response `400` `ApiErrorString` Bad Request
   * @response `422` `ApiErrorArrayValidationError` Unprocessable Entity
   * @response `500` `ApiErrorString` Internal Server Error
   */
  createBlog = (data: BlogCreate, params: RequestParams = {}) =>
    this.http.request<Message, ApiErrorString | ApiErrorArrayValidationError>({
      path: `/api/v1/blogs`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description get one blog
   *
   * @tags BlogManagementApi
   * @name GetOneBlog
   * @summary GetOneBlog
   * @request GET:/api/v1/blogs/{id}
   * @secure
   * @response `200` `DataBlogDetail` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getOneBlog = (id: string, params: RequestParams = {}) =>
    this.http.request<DataBlogDetail, ApiErrorString>({
      path: `/api/v1/blogs/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update one Blog
   *
   * @tags BlogManagementApi
   * @name UpdateOneBlog
   * @summary Update
   * @request PUT:/api/v1/blogs/{id}
   * @secure
   * @response `200` `Message` Blog Updated Successfully
   * @response `400` `ApiErrorString` Bad Request
   * @response `422` `ApiErrorArrayValidationError` Validation Error
   * @response `500` `ApiErrorString` Internal Server Error
   */
  updateOneBlog = (id: number, data: BlogUpdate, params: RequestParams = {}) =>
    this.http.request<Message, ApiErrorString | ApiErrorArrayValidationError>({
      path: `/api/v1/blogs/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete Detail Blog By ID
   *
   * @tags BlogManagementApi
   * @name DeleteOneBlog
   * @summary DeleteOneBlog
   * @request DELETE:/api/v1/blogs/{id}
   * @secure
   * @response `200` `Message` Blog Deleted Successfully
   * @response `500` `ApiErrorString` Internal Server Error
   */
  deleteOneBlog = (id: string, params: RequestParams = {}) =>
    this.http.request<Message, ApiErrorString>({
      path: `/api/v1/blogs/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
