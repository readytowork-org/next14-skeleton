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
  DataCountUserGetUserResponse,
  DataUserGetUserResponse,
  GetAllUsersParams,
  Message,
  UserCreateUserRequestData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserManagementApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description get all users
   *
   * @tags UserManagementApi
   * @name GetAllUsers
   * @summary All users
   * @request GET:/api/v1/users
   * @secure
   * @response `200` `DataCountUserGetUserResponse` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getAllUsers = (query: GetAllUsersParams, params: RequestParams = {}) =>
    this.http.request<DataCountUserGetUserResponse, ApiErrorString>({
      path: `/api/v1/users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create one user
   *
   * @tags UserManagementApi
   * @name CreateUser
   * @summary Create CreateUser
   * @request POST:/api/v1/users
   * @secure
   * @response `200` `Message` CUser Created Successfully
   * @response `400` `ApiErrorString` Bad Request
   * @response `422` `ApiErrorArrayValidationError` Unprocessable Entity
   * @response `500` `ApiErrorString` Internal Server Error
   */
  createUser = (data: UserCreateUserRequestData, params: RequestParams = {}) =>
    this.http.request<Message, ApiErrorString | ApiErrorArrayValidationError>({
      path: `/api/v1/users`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description get user profile
   *
   * @tags UserManagementApi
   * @name GetOneUser
   * @summary CreateUser Profile
   * @request GET:/api/v1/{id}
   * @secure
   * @response `200` `DataUserGetUserResponse` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getOneUser = (id: string, params: RequestParams = {}) =>
    this.http.request<DataUserGetUserResponse, ApiErrorString>({
      path: `/api/v1/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
