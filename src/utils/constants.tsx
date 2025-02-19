//use query key types

export enum QueryKeys {
  GET_PUBLIC_BLOGS = "GET_PUBLIC_BLOGS",
  GET_SINGLE_PUBLIC_BLOG = "GET_SINGLE_PUBLIC_BLOG",
  GET_POPULAR_KEYWORDS = "GET_POPULAR_KEYWORDS",
  GET_LATEST_BLOGS = "GET_LATEST_BLOGS",
  GET_SINGLE_PUBLIC_JOBS = "GET_SINGLE_PUBLIC_JOBS",
  GET_RECOMMENDED_JOBS = "GET_RECOMMENDED_JOBS",
  GET_JOBS = "GET_JOBS",
  GET_SEARCH_BY_KEYWORD_OPTIONS = "GET_SEARCH_BY_KEYWORD_OPTIONS",
}

export interface JobType {
  label: string;
  value: string;
}

export const JobTypes: JobType[] = [
  { label: "All", value: "全て" },
  { label: "Full time", value: "正社員" },
  { label: "Part time", value: "アルバイト・パート" },
  { label: "Haken", value: "派遣社員" },
  { label: "Contract", value: "契約社員" },
  { label: "Freelance", value: "業務委託" },
];
