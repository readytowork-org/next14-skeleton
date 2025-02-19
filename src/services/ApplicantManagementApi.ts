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
  DataApplicantDetails,
  DataCountApplicantList,
  GetApplicantListParams,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ApplicantManagementApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description get all applicants
   *
   * @tags ApplicantManagementApi
   * @name GetApplicantList
   * @summary GetApplicantList
   * @request GET:/api/v1/applicants
   * @secure
   * @response `200` `DataCountApplicantList` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getApplicantList = (
    query: GetApplicantListParams,
    params: RequestParams = {},
  ) =>
    this.http.request<DataCountApplicantList, ApiErrorString>({
      path: `/api/v1/applicants`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description upload applicant csv data
   *
   * @tags ApplicantManagementApi
   * @name UploadApplicantCsv
   * @summary UploadApplicantCSV
   * @request POST:/api/v1/applicants/upload
   * @secure
   * @response `200` `string` File Uploaded Successfully
   * @response `500` `ApiErrorString` Internal Server Error
   */
  uploadApplicantCsv = (
    data: {
      /**
       * Upload File
       * @format binary
       */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<string, ApiErrorString>({
      path: `/api/v1/applicants/upload`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description get one applicant details
   *
   * @tags ApplicantManagementApi
   * @name OpenApplicantDetailsById
   * @summary OpenApplicantDetailsById
   * @request GET:/api/v1/applicants/{id}
   * @secure
   * @response `200` `DataApplicantDetails` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  openApplicantDetailsById = (id: number, params: RequestParams = {}) =>
    this.http.request<DataApplicantDetails, ApiErrorString>({
      path: `/api/v1/applicants/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
