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
  FavoriteApplicantCreateFavoriteApplicant,
  Message,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class FavoriteApplicantApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Add a favorite applicant
   *
   * @tags FavoriteApplicantApi
   * @name AddFavoriteApplicant
   * @summary AddFavoriteApplicant
   * @request POST:/api/v1/favorites
   * @secure
   * @response `201` `Message` Favorite Applicant Added Successfullyy
   * @response `400` `ApiErrorString` Bad Request
   * @response `500` `ApiErrorString` Internal Server Error
   */
  addFavoriteApplicant = (
    data: FavoriteApplicantCreateFavoriteApplicant,
    params: RequestParams = {},
  ) =>
    this.http.request<Message, ApiErrorString>({
      path: `/api/v1/favorites`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description remove favorite applicant by id
   *
   * @tags FavoriteApplicantApi
   * @name RemoveFavoriteApplicantById
   * @summary RemoveFavoriteApplicantById
   * @request DELETE:/api/v1/favorites/{applicant_id}
   * @secure
   * @response `201` `Message` Favorite Applicant Removed Successfully
   * @response `400` `ApiErrorString` Bad Request
   * @response `500` `ApiErrorString` Internal Server Error
   */
  removeFavoriteApplicantById = (
    applicantId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<Message, ApiErrorString>({
      path: `/api/v1/favorites/${applicantId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
