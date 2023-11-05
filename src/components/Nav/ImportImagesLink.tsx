"use client";

import React from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import Link from "next/link";
import { useIsSuperAdminSuspenseQuery } from "../../gql/jschileAPI";

export const ImportImagesLink = () => {
  const isSuperAdminQuery = useIsSuperAdminSuspenseQuery();
  if (!isSuperAdminQuery.data.me.isSuperAdmin) {
    return;
  }
  return (
    <Link href={"/import"} prefetch>
      <DropdownMenuItem className="cursor-pointer">
        Importar Imágenes
      </DropdownMenuItem>
    </Link>
  );
};
