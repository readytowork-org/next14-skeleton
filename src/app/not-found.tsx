import React from "react";
import {
  CommonHydrationProvider,
  FooterHydrationProvider,
  FooterWrapper,
  Header,
  NotFoundPage,
  Sidebar,
} from "../components";
import { headerList } from "../components/molecules/Header/types";
import CommonLayoutComps from "../components/template/CommonLayoutComps";
import { Components } from "../components/template/CommonLayoutComps/types";

export default function NotFound() {
  return (
    <>
      <Sidebar />
      <Header headerList={headerList} />
      <NotFoundPage />
      <CommonHydrationProvider>
        <CommonLayoutComps
          allowedComponents={[
            Components.minDriBlogs,
            Components.recommendedJobs,
          ]}
        />
      </CommonHydrationProvider>
      <FooterHydrationProvider>
        <FooterWrapper />
      </FooterHydrationProvider>
    </>
  );
}
