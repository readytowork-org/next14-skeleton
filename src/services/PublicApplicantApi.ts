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
  ApplicantsBulkCreate,
  ApplicantsCreate,
  Message,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PublicApplicantApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Apply to job
   *
   * @tags PublicApplicantApi
   * @name ApplyJob
   * @summary ApplyJob
   * @request POST:/api/v1/applicants/apply
   * @response `201` `Message` Job Applied Successfully
   * @response `400` `ApiErrorString` Bad Request
   * @response `422` `ApiErrorArrayValidationError` Unprocessable Entity
   * @response `500` `ApiErrorString` Internal Server Error
   */
  applyJob = (data: ApplicantsCreate, params: RequestParams = {}) =>
    this.http.request<Message, ApiErrorString | ApiErrorArrayValidationError>({
      path: `/api/v1/applicants/apply`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Apply to multiple Job
   *
   * @tags PublicApplicantApi
   * @name BulkApplyJob
   * @summary BulkApplyJob
   * @request POST:/api/v1/applicants/apply/bulk
   * @response `201` `Message` Job Applied Successfully
   * @response `400` `ApiErrorString` Bad Request
   * @response `422` `ApiErrorArrayValidationError` Unprocessable Entity
   * @response `500` `ApiErrorString` Internal Server Error
   */
  bulkApplyJob = (data: ApplicantsBulkCreate, params: RequestParams = {}) =>
    this.http.request<Message, ApiErrorString | ApiErrorArrayValidationError>({
      path: `/api/v1/applicants/apply/bulk`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
