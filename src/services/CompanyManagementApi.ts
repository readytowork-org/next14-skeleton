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
  CompanyCreate,
  CompanyUpdate,
  DataCompanyDetail,
  DataCountCompanyList,
  GetAllCompanyParams,
  Message,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CompanyManagementApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description get all company
   *
   * @tags CompanyManagementApi
   * @name GetAllCompany
   * @summary GetAllCompany
   * @request GET:/api/v1/companies
   * @secure
   * @response `200` `DataCountCompanyList` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getAllCompany = (query: GetAllCompanyParams, params: RequestParams = {}) =>
    this.http.request<DataCountCompanyList, ApiErrorString>({
      path: `/api/v1/companies`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create one Company
   *
   * @tags CompanyManagementApi
   * @name CreateCompany
   * @summary CreateCompany
   * @request POST:/api/v1/companies
   * @secure
   * @response `201` `Message` Company Created Successfullyy
   * @response `400` `ApiErrorString` Bad Request
   * @response `422` `ApiErrorArrayValidationError` Unprocessable Entity
   * @response `500` `ApiErrorString` Internal Server Error
   */
  createCompany = (data: CompanyCreate, params: RequestParams = {}) =>
    this.http.request<Message, ApiErrorString | ApiErrorArrayValidationError>({
      path: `/api/v1/companies`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description get one company
   *
   * @tags CompanyManagementApi
   * @name GetOneCompany
   * @summary GetOneCompany
   * @request GET:/api/v1/companies/{id}
   * @secure
   * @response `200` `DataCompanyDetail` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getOneCompany = (id: number, params: RequestParams = {}) =>
    this.http.request<DataCompanyDetail, ApiErrorString>({
      path: `/api/v1/companies/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update one Company
   *
   * @tags CompanyManagementApi
   * @name UpdateOneCompany
   * @summary UpdateOneCompany
   * @request PUT:/api/v1/companies/{id}
   * @secure
   * @response `200` `Message` Company Updated Successfully
   * @response `400` `ApiErrorString` Bad Request
   * @response `422` `ApiErrorArrayValidationError` Validation Error
   * @response `500` `ApiErrorString` Internal Server Error
   */
  updateOneCompany = (
    id: number,
    data: CompanyUpdate,
    params: RequestParams = {},
  ) =>
    this.http.request<Message, ApiErrorString | ApiErrorArrayValidationError>({
      path: `/api/v1/companies/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
