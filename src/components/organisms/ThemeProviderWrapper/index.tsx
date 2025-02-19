"use client";

import { APP_THEME } from "@/src/utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { FC, ReactNode } from "react";

export const ThemeProviderWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <ThemeProvider theme={APP_THEME}>{children}</ThemeProvider>;
};
