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
  DataArrayString,
  DataCountJobList,
  DataCountJobSlugs,
  DataJobDetail,
  GetAllJobSlugsParams,
  GetAllJobsParams,
  GetJobsByIdParams,
  PopularKeywordsParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class PublicJobManagementApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description get all
   *
   * @tags PublicJobManagementApi
   * @name GetAllJobs
   * @summary GetAllJobs
   * @request GET:/api/v1/public/jobs
   * @response `200` `DataCountJobList` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getAllJobs = (query: GetAllJobsParams, params: RequestParams = {}) =>
    this.http.request<DataCountJobList, ApiErrorString>({
      path: `/api/v1/public/jobs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description get jobs by providing job ids
   *
   * @tags PublicJobManagementApi
   * @name GetJobsById
   * @summary GetJobsById
   * @request GET:/api/v1/public/jobs/by-id
   * @response `200` `DataCountJobList` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getJobsById = (query: GetJobsByIdParams, params: RequestParams = {}) =>
    this.http.request<DataCountJobList, ApiErrorString>({
      path: `/api/v1/public/jobs/by-id`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description get popular keywords
   *
   * @tags PublicJobManagementApi
   * @name PopularKeywords
   * @summary PopularKeywords
   * @request GET:/api/v1/public/jobs/popular-keywords
   * @response `200` `DataArrayString` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  popularKeywords = (
    query: PopularKeywordsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<DataArrayString, ApiErrorString>({
      path: `/api/v1/public/jobs/popular-keywords`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description get all job slugs
   *
   * @tags PublicJobManagementApi
   * @name GetAllJobSlugs
   * @summary GetAllJobSlugs
   * @request GET:/api/v1/public/jobs/slugs
   * @response `200` `DataCountJobSlugs` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getAllJobSlugs = (query: GetAllJobSlugsParams, params: RequestParams = {}) =>
    this.http.request<DataCountJobSlugs, ApiErrorString>({
      path: `/api/v1/public/jobs/slugs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description get one job
   *
   * @tags PublicJobManagementApi
   * @name GetOneJob
   * @summary GetOneJob
   * @request GET:/api/v1/public/jobs/{id}
   * @response `200` `DataJobDetail` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getOneJob = (id: string, params: RequestParams = {}) =>
    this.http.request<DataJobDetail, ApiErrorString>({
      path: `/api/v1/public/jobs/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description get at most 4 recommended jobs
   *
   * @tags PublicJobManagementApi
   * @name GetRecommendedJobs
   * @summary GetRecommendedJobs
   * @request GET:/api/v1/public/recommended-jobs
   * @response `200` `DataCountJobList` OK
   * @response `500` `ApiErrorString` Internal Server Error
   */
  getRecommendedJobs = (params: RequestParams = {}) =>
    this.http.request<DataCountJobList, ApiErrorString>({
      path: `/api/v1/public/recommended-jobs`,
      method: "GET",
      format: "json",
      ...params,
    });
}
