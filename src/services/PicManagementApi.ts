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
  DataCountPicList,
  DataPicDetail,
  GetAllPicParams,
  Message,
  PicCreate,
  PicUpdate,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PicManagementApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description get all pic
   *
   * @tags PICManagementApi
   * @name GetAllPic
   * @summary GetAllPIC
   * @request GET:/api/v1/pics
   * @secure
   * @response `200` `DataCountPicList` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getAllPic = (query: GetAllPicParams, params: RequestParams = {}) =>
    this.http.request<DataCountPicList, ApiErrorString>({
      path: `/api/v1/pics`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create one PIC
   *
   * @tags PICManagementApi
   * @name CreateOnePic
   * @summary CreateOnePIC
   * @request POST:/api/v1/pics
   * @secure
   * @response `201` `Message` PIC Created Successfullyy
   * @response `400` `ApiErrorString` Bad Request
   * @response `422` `ApiErrorArrayValidationError` Unprocessable Entity
   * @response `500` `ApiErrorString` Internal Server Error
   */
  createOnePic = (data: PicCreate, params: RequestParams = {}) =>
    this.http.request<Message, ApiErrorString | ApiErrorArrayValidationError>({
      path: `/api/v1/pics`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description get one pic
   *
   * @tags PICManagementApi
   * @name GetOnePic
   * @summary GetOnePIC
   * @request GET:/api/v1/pics/{id}
   * @secure
   * @response `200` `DataPicDetail` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getOnePic = (id: number, params: RequestParams = {}) =>
    this.http.request<DataPicDetail, ApiErrorString>({
      path: `/api/v1/pics/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update one pic
   *
   * @tags PICManagementApi
   * @name UpdateOnePic
   * @summary UpdateOnePIC
   * @request PUT:/api/v1/pics/{id}
   * @secure
   * @response `200` `Message` PIC Updated Successfully
   * @response `400` `ApiErrorString` Bad Request
   * @response `422` `ApiErrorArrayValidationError` Validation Error
   * @response `500` `ApiErrorString` Internal Server Error
   */
  updateOnePic = (id: number, data: PicUpdate, params: RequestParams = {}) =>
    this.http.request<Message, ApiErrorString | ApiErrorArrayValidationError>({
      path: `/api/v1/pics/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
