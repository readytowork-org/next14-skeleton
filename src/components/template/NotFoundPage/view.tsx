"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { Button, Divider } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export function NotFoundPage() {
  const t = useTranslations("404");

  return (
    <div className={"flex flex-col"}>
      <div
        className={
          "flex flex-col md:flex-row md:gap-5 items-center px-6 min-h-[calc(100vh-66px)] md:min-h-[calc(100vh-47px)] justify-center py-8 bg-[#FAFAFA]"
        }
      >
        <div
          className={
            " relative w-full xs:w-[360px] sm:w-[500px]  md:w-[647px] aspect-[1.85]"
          }
        >
          <Image src={"/assets/not-found.svg"} fill alt={"not-found image"} />
        </div>

        <div
          className={
            "flex flex-col items-center md:items-start pt-6 md:pt-0 gap-2 md:gap-[12px]"
          }
        >
          <span className={"font-semibold text-[24px]  sm:text-[28px]"}>
            {t("404 PAGE NOT FOUND")}
          </span>

          <Divider
            className={"w-[100%] my-3"}
            sx={{
              ":root": {
                backgroundColor: "#D1CFCF",
              },
            }}
          />
          <p
            className={
              "whitespace-break-spaces text-black-text text-base md:text-xl text-center lg:text-start font-light md:leading-[30px]"
            }
          >
            {t("Sorry, Page you’re searching for could not be found")}
            <br className={"hidden md:block"} />
            <span>
              {t("Please try reloading page or click Return to top page")}
            </span>
          </p>
          <Button component={Link} href={"/"} variant={"contained"}>
            {t("Return to Top Page")}
          </Button>
        </div>
      </div>
    </div>
  );
}
