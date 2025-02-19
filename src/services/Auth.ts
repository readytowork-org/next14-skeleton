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
  AuthFirebaseErrorResponse,
  AuthLoginRequest,
  AuthLoginResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Authenticates a user with email and password
   *
   * @tags Auth
   * @name V1AdminLoginCreate
   * @summary Login
   * @request POST:/api/v1/admin/login
   * @response `200` `AuthLoginResponse` Login successful
   * @response `400` `AuthFirebaseErrorResponse` Invalid request parameters
   * @response `401` `AuthFirebaseErrorResponse` Invalid credentials
   * @response `500` `AuthFirebaseErrorResponse` Server error
   */
  v1AdminLoginCreate = (data: AuthLoginRequest, params: RequestParams = {}) =>
    this.http.request<AuthLoginResponse, AuthFirebaseErrorResponse>({
      path: `/api/v1/admin/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
