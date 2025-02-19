"use client";

import React, { FC } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export interface AppPaginationProps {
  count: number;
  rowsPerPage?: number;
  page: number;
  onPageChange?: (page: number) => void;
}

export const AppPagination: FC<AppPaginationProps> = ({
  count,
  rowsPerPage = 10,
  page = 1,
  onPageChange,
}) => {
  const existingParams = useSearchParams();
  const totalPages = Math.ceil(count / rowsPerPage);

  // Function to generate the dynamic link for pagination
  const getLink = (page: number) => {
    const searchParams = new URLSearchParams(existingParams.toString());
    searchParams.set("page", page.toString());
    return `?${searchParams.toString()}`;
  };
  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={(_, newPage) => onPageChange?.(newPage)}
      variant={"outlined"}
      shape={"rounded"}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          scroll={false}
          href={`${getLink(item.page ?? 1)}`}
          {...item}
        />
      )}
    />
  );
};
