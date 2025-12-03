"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BackIcon from "@/icons/back-icon.svg";

export const BackButton = (props: {
  href?: string;
  redirectionType?: "href" | "back";
  Component: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { component: "string" | React.ElementType }>;
}) => {
  const router = useRouter();

  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      setCanGoBack(history.length > 1);
    }
  }, []);

  return (
    <props.Component
      href={!canGoBack ? "/" : props.href}
      component={props.redirectionType == "href" || !canGoBack ? Link : props.Component}
      onClick={props.redirectionType == "back" && canGoBack ? router.back : undefined}
    >
      <BackIcon />
    </props.Component>
  );
};
