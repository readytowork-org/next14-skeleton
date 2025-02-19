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

export interface ApiErrorArrayValidationError {
  error: ValidationError[];
  message: string;
}

export interface ApiErrorString {
  error: string;
  message: string;
}

export interface DataApplicantDetails {
  data: ApplicantDetails;
}

export interface DataArrayBlogSlugs {
  data: BlogSlugs[];
}

export interface DataArrayString {
  data: string[];
}

export interface DataArrayTagList {
  data: TagList[];
}

export interface DataBlogDetail {
  data: BlogDetail;
}

export interface DataCompanyDetail {
  data: CompanyDetail;
}

export interface DataJobDetail {
  data: JobDetail;
}

export interface DataPicDetail {
  data: PicDetail;
}

export interface DataProfileCUser {
  data: ProfileCUser;
}

export interface DataScoutManagementScoutStatsDTO {
  data: ScoutManagementScoutStatsDTO;
}

export interface DataString {
  data: string;
}

export interface DataUserGetUserResponse {
  data: UserGetUserResponse;
}

export interface DataCountApplicantList {
  count: number;
  data: ApplicantList[];
}

export interface DataCountBlogList {
  count: number;
  data: BlogList[];
}

export interface DataCountBlogPublicList {
  count: number;
  data: BlogPublicList[];
}

export interface DataCountCompanyList {
  count: number;
  data: CompanyList[];
}

export interface DataCountJobList {
  count: number;
  data: JobList[];
}

export interface DataCountJobSlugs {
  count: number;
  data: JobSlugs[];
}

export interface DataCountPicList {
  count: number;
  data: PicList[];
}

export interface DataCountScoutManagementScout {
  count: number;
  data: ScoutManagementScout[];
}

export interface DataCountTagPublicBlogKeyword {
  count: number;
  data: TagPublicBlogKeyword[];
}

export interface DataCountUserGetUserResponse {
  count: number;
  data: UserGetUserResponse[];
}

export interface Message {
  message: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export type ApplicantBirthYear = 20 | 30 | 40 | 50 | 60 | 70;

export interface ApplicantDetails {
  address: string;
  agreement: boolean;
  birth_year: number;
  change_jobs: string;
  created_at: string;
  deleted_at: any;
  email: string;
  experience: string;
  full_name: string;
  id: number;
  image: string;
  job_id: string;
  licenses: string[];
  origin: string;
  phone: string;
  po_box: string;
  scout_id: number;
  status_history: DaoScoutStatusHistory[];
  updated_at: string;
  working_style: string;
}

export interface ApplicantList {
  birth_year: number;
  created_at: string;
  /** Available for the daily company scouts */
  daily_applicant_available_scouts: number;
  deleted_at: any;
  experience: string;
  id: number;
  image: string;
  /** Favorite flag for viewing company */
  is_favorite: boolean;
  job_id: string;
  /** Licenses will be in fetched in csv */
  licenses: string;
  /** Available for the montly company scouts */
  monthly_applicant_available_scouts: number;
  origin: string;
  /** No of applicants that are Scouted by other companies */
  scouted_by_others: number;
  /** Total availabe scouts for a company */
  total_available_scouts: number;
  updated_at: string;
}

export interface ApplicantsBulkCreate {
  address: string;
  agreement: boolean;
  birth_year: number;
  change_jobs: string;
  readonly created_at: any;
  readonly deleted_at: any;
  email: string;
  experience: string;
  full_name: string;
  readonly id: any;
  image: string;
  job_id: any;
  job_ids: string[];
  licenses: string[];
  origin: string;
  phone: string;
  po_box: string;
  readonly updated_at: any;
  working_style: string;
}

export interface ApplicantsCreate {
  address: string;
  agreement: boolean;
  birth_year: number;
  change_jobs: string;
  readonly created_at: any;
  readonly deleted_at: any;
  email: string;
  experience: string;
  full_name: string;
  readonly id: any;
  image: string;
  job_id: string;
  licenses: string[];
  origin: string;
  phone: string;
  po_box: string;
  readonly updated_at: any;
  working_style: string;
}

export interface AuthFirebaseErrorResponse {
  details: Record<string, any>;
  error: string;
}

export interface AuthLoginRequest {
  /** @default "admin@minnanodriver.com" */
  email: string;
  /** @default "######" */
  password: string;
}

export interface AuthLoginResponse {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
}

export interface BlogCreate {
  readonly created_at: any;
  deleted_at: any;
  details: string;
  readonly id: any;
  image_url: string;
  meta_description: string;
  meta_title: string;
  readonly posted_at: any;
  status: BlogStatus;
  /** @maxItems 10 */
  tags: string[];
  title: string;
  readonly updated_at: any;
  url_slug: string;
}

export interface BlogDetail {
  created_at: string;
  deleted_at: any;
  details: string;
  id: number;
  image_url: string;
  meta_description: string;
  meta_title: string;
  posted_at: string;
  status: BlogStatus;
  /** @maxItems 10 */
  tags: string[];
  title: string;
  updated_at: string;
  url_slug: string;
}

export interface BlogList {
  created_at: string;
  deleted_at: any;
  id: number;
  image_url: string;
  status: string;
  /** @maxItems 10 */
  tags: string[];
  title: string;
  updated_at: string;
  url_slug: string;
}

export interface BlogPublicList {
  created_at: string;
  deleted_at: any;
  details: string;
  id: number;
  image_url: string;
  meta_description: string;
  posted_at: string;
  status: string;
  title: string;
  updated_at: string;
  url_slug: string;
}

export interface BlogSlugs {
  deleted_at: any;
  updated_at: string;
  url_slug: string;
}

export type BlogStatus = "public" | "private";

export interface BlogUpdate {
  readonly created_at: any;
  deleted_at: any;
  details: string;
  id: number;
  image_url: string;
  meta_description: string;
  meta_title: string;
  readonly posted_at: any;
  status: BlogStatus;
  /** @maxItems 10 */
  tags: string[];
  title: string;
  readonly updated_at: any;
  readonly url_slug: string;
}

export interface CompanyCreate {
  company_name: string;
  readonly created_at: any;
  readonly deleted_at: any;
  email: string;
  readonly id: any;
  other_memo: string;
  password: string;
  phone_number: string;
  pic_name: string;
  status: CompanyStatus;
  readonly updated_at: any;
}

export interface CompanyDetail {
  company_name: string;
  created_at: string;
  deleted_at: any;
  email: string;
  id: number;
  other_memo: string;
  readonly password: any;
  phone_number: string;
  pic_name: string;
  status: CompanyStatus;
  updated_at: string;
}

export interface CompanyList {
  company_name: string;
  created_at: string;
  id: number;
  pic_name: string;
  status: CompanyStatus;
}

export type CompanyStatus = "using" | "suspended";

export interface CompanyUpdate {
  company_name: string;
  readonly created_at: any;
  readonly deleted_at: any;
  readonly email: string;
  id: number;
  other_memo: string;
  password: string;
  phone_number: string;
  pic_name: string;
  status: CompanyStatus;
  readonly updated_at: any;
}

export interface DaoScoutStatusHistory {
  company_id: number;
  created_at: string;
  deleted_at: any;
  id: number;
  pic_id: number;
  scout_id: number;
  status: string;
  updated_at: string;
}

export interface FavoriteApplicantCreateFavoriteApplicant {
  applicant_id: number;
}

export interface JobDetail {
  created_at: string;
  deleted_at: any;
  description: string;
  id: string;
  images: string[];
  is_recommended: boolean;
  job_type: string;
  location: string;
  salary: string;
  tags: string[];
  title: string;
  updated_at: string;
}

export type JobJobsTypes =
  | "全て"
  | "正社員"
  | "アルバイト・パート"
  | "派遣社員"
  | "契約社員"
  | "業務委託";

export interface JobList {
  created_at: string;
  deleted_at: any;
  id: string;
  images: string[];
  is_recommended: boolean;
  job_type: string;
  location: string;
  salary: string;
  tags: string[];
  title: string;
  updated_at: string;
}

export type JobQuickSearchItem =
  | "高収入"
  | "未経験歓迎"
  | "働き方重視"
  | "短期・即採用"
  | "女性ドライバー応援"
  | "シニア歓迎"
  | "地域密着"
  | "大手企業求人"
  | "運転好き必見"
  | "福利厚生充実";

export interface JobSlugs {
  deleted_at: any;
  id: string;
  title: string;
  updated_at: string;
}

export interface PicCreate {
  readonly company_id: number;
  readonly created_at: any;
  readonly deleted_at: any;
  email: string;
  readonly id: number;
  password: string;
  phone_number: string;
  pic_name: string;
  status: PicStatus;
  readonly suspended_manually: boolean;
  readonly updated_at: any;
}

export interface PicDetail {
  company_id: number;
  created_at: string;
  deleted_at: any;
  email: string;
  id: number;
  readonly password: any;
  phone_number: string;
  pic_name: string;
  status: PicStatus;
  suspended_manually: boolean;
  updated_at: string;
}

export interface PicList {
  created_at: string;
  email: string;
  id: number;
  phone_number: string;
  pic_name: string;
  status: string;
}

export type PicStatus = "using" | "suspended";

export interface PicUpdate {
  readonly company_id: number;
  readonly created_at: any;
  readonly deleted_at: any;
  readonly email: string;
  readonly id: number;
  readonly password: string;
  phone_number: string;
  pic_name: string;
  status: PicStatus;
  readonly suspended_manually: boolean;
  readonly updated_at: any;
}

export interface ProfileCUser {
  created_at: string;
  deleted_at: any;
  email: string;
  full_name: string;
  gender: string;
  id: number;
  password: string;
  phone: string;
  updated_at: string;
}

export interface ScoutManagementScout {
  birth_year: number;
  created_at: string;
  /** Available for the daily company scouts */
  daily_applicant_available_scouts: number;
  deleted_at: any;
  experience: string;
  id: number;
  image: string;
  /** Favorite flag for viewing company */
  is_favorite: boolean;
  job_id: string;
  /** Licenses will be in fetched in csv */
  licenses: string;
  /** Available for the montly company scouts */
  monthly_applicant_available_scouts: number;
  origin: string;
  /** No of applicants that are Scouted by other companies */
  scouted_by_others: number;
  status: string;
  /** Total availabe scouts for a company */
  total_available_scouts: number;
  updated_at: string;
}

export interface ScoutManagementScoutStatsDTO {
  hired: number;
  not_available: number;
  rejected: number;
  scouted: number;
  selected: number;
  set_later: number;
  total_scouts: number;
}

export interface ScoutManagementScoutStatusDTO {
  id: number;
  status: string;
}

export type ScoutManagementStatus =
  | "scouted"
  | "not_available"
  | "set_later"
  | "rejected"
  | "selected"
  | "hired";

export interface TagList {
  created_at: string;
  deleted_at: any;
  id: number;
  name: string;
  updated_at: string;
}

export interface TagPublicBlogKeyword {
  created_at: string;
  deleted_at: any;
  id: number;
  name: string;
  updated_at: string;
}

export interface UserCreateUserRequestData {
  confirm_password: string;
  created_at: string;
  deleted_at: any;
  email: string;
  full_name: string;
  gender: string;
  id: number;
  password: string;
  phone: string;
  updated_at: string;
}

export interface UserGetUserResponse {
  created_at: string;
  deleted_at: any;
  email: string;
  full_name: string;
  gender: string;
  id: number;
  password: string;
  phone: string;
  updated_at: string;
}

export interface UtilityResponse {
  attributes: any;
  data: string;
  message: string;
  path: string;
  success: boolean;
}

export interface GetApplicantListParams {
  all?: boolean;
  current_work_type?: string[];
  desired_workplace?: string;
  display_setting?: string[];
  driving_licenses?: string[];
  keyword?: string;
  page: number;
  page_size?: number;
  sort?: string;
  time_period?: string[];
  work_experience?: string[];
  year_of_birth?: YearOfBirthEnum;
}

export type YearOfBirthEnum = 20 | 30 | 40 | 50 | 60 | 70;

export type GetApplicantListParams1YearOfBirthEnum =
  | 20
  | 30
  | 40
  | 50
  | 60
  | 70;

export interface GetAllBlogsParams {
  all?: boolean;
  keyword?: string;
  page: number;
  page_size?: number;
  sort?: string;
  status: string;
}

export interface GetAllCompanyParams {
  all?: boolean;
  keyword?: string;
  page: number;
  page_size?: number;
  sort?: string;
  status?: StatusEnum;
}

export type StatusEnum = "using" | "suspended";

export type GetAllCompanyParams1StatusEnum = "using" | "suspended";

export interface GetAllPicParams {
  all?: boolean;
  keyword?: string;
  page: number;
  page_size?: number;
  sort?: string;
  status?: StatusEnum1;
}

export type StatusEnum1 = "using" | "suspended";

export type GetAllPicParams1StatusEnum = "using" | "suspended";

export interface GetAllPublicBlogsParams {
  all?: boolean;
  keyword?: string;
  page: number;
  page_size?: number;
  popular_keywords?: string;
  sort?: string;
}

export interface GetAllJobsParams {
  all?: boolean;
  city?: string[];
  /** @default false */
  is_recommended?: boolean;
  job_types?: JobTypesEnum[];
  keyword?: string;
  page: number;
  page_size?: number;
  prefecture?: string;
  quick_search?: QuickSearchEnum[];
  sort?: string;
  tags?: string[];
}

export type JobTypesEnum =
  | "全て"
  | "正社員"
  | "アルバイト・パート"
  | "派遣社員"
  | "契約社員"
  | "業務委託";

export type QuickSearchEnum =
  | "高収入"
  | "未経験歓迎"
  | "働き方重視"
  | "短期・即採用"
  | "女性ドライバー応援"
  | "シニア歓迎"
  | "地域密着"
  | "大手企業求人"
  | "運転好き必見"
  | "福利厚生充実";

export type GetAllJobsParams1JobTypesEnum =
  | "全て"
  | "正社員"
  | "アルバイト・パート"
  | "派遣社員"
  | "契約社員"
  | "業務委託";

export type GetAllJobsParams1QuickSearchEnum =
  | "高収入"
  | "未経験歓迎"
  | "働き方重視"
  | "短期・即採用"
  | "女性ドライバー応援"
  | "シニア歓迎"
  | "地域密着"
  | "大手企業求人"
  | "運転好き必見"
  | "福利厚生充実";

export interface GetJobsByIdParams {
  all?: boolean;
  job_ids?: string[];
  keyword?: string;
  page: number;
  page_size?: number;
  sort?: string;
}

export interface PopularKeywordsParams {
  all?: boolean;
  keyword?: string;
  page: number;
  page_size?: number;
  sort?: string;
}

export interface GetAllJobSlugsParams {
  all?: boolean;
  keyword?: string;
  page: number;
  page_size?: number;
  sort?: string;
}

export interface GetAllBlogKeywordsParams {
  all?: boolean;
  keyword?: string;
  page: number;
  page_size?: number;
  sort?: string;
}

export interface GetLatestPublicBlogParams {
  all?: boolean;
  keyword?: string;
  page: number;
  page_size?: number;
  popular_keywords?: string;
  sort?: string;
}

export interface GetScoutListParams {
  all?: boolean;
  favorite?: boolean;
  keyword?: string;
  opened_date?: string;
  page: number;
  page_size?: number;
  sort?: string;
  status?: StatusEnum2;
}

export type StatusEnum2 =
  | "scouted"
  | "not_available"
  | "set_later"
  | "rejected"
  | "selected"
  | "hired";

export type GetScoutListParams1StatusEnum =
  | "scouted"
  | "not_available"
  | "set_later"
  | "rejected"
  | "selected"
  | "hired";

export interface GetAllUsersParams {
  all?: boolean;
  keyword?: string;
  page: number;
  page_size?: number;
  sort?: string;
}

export interface GetSignedUrlParams {
  /** Image Url */
  image_url?: string;
}
