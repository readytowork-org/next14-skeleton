"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BackIcon from "@/icons/back-icon.svg";
import IconButton from "@mui/material/IconButton";

export const BackButton = (props: {
  href?: string;
  redirectionType?: "href" | "back";
}) => {
  const router = useRouter();

  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      setCanGoBack(history.length > 1);
    }
  }, []);

  return (
    <IconButton
      href={!canGoBack ? "/" : props.href}
      component={
        props.redirectionType == "href" || !canGoBack ? Link : IconButton
      }
      onClick={
        props.redirectionType == "back" && canGoBack ? router.back : undefined
      }
      sx={{
        position: "absolute",
      }}
    >
      <BackIcon />
    </IconButton>
  );
};
