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
  DataString,
  GetSignedUrlParams,
  UtilityResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UtilityApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description handles file upload
   *
   * @tags UtilityApi
   * @name FileUpload
   * @summary handles file upload
   * @request POST:/api/v1/utils/files/upload
   * @secure
   * @response `200` `UtilityResponse` File Uploaded Successfully
   * @response `400` `ApiErrorString` Bad Request
   */
  fileUpload = (
    data: {
      /**
       * Upload File
       * @format binary
       */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<UtilityResponse, ApiErrorString>({
      path: `/api/v1/utils/files/upload`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description generate signed url
   *
   * @tags UtilityApi
   * @name GetSignedUrl
   * @summary GetSignedUrl
   * @request GET:/api/v1/utils/images/signed_url
   * @secure
   * @response `200` `DataString` OK
   * @response `400` `ApiErrorString` Bad Request
   */
  getSignedUrl = (query: GetSignedUrlParams, params: RequestParams = {}) =>
    this.http.request<DataString, ApiErrorString>({
      path: `/api/v1/utils/images/signed_url`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
