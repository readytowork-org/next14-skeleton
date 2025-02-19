"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React from "react";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height={"4px"}
        color={"#FF935D"}
        options={{ showSpinner: false }}
        delay={100}
      />
    </>
  );
};

export { ProgressBarProvider };
