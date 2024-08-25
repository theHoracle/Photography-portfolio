"use client";

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

const PageBreadcrumb = () => {
  const pathname = usePathname();
  const pathArr = pathname.split("/").filter(Boolean);

  let accumulatedPath = "";

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {pathArr.map((path, index) => {
          accumulatedPath += `/${path}`;
          const label = path.replace(/-/g, " ");

          return (
            <React.Fragment key={`${accumulatedPath}-${index}`}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={accumulatedPath} className="capitalize">
                    {label}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < pathArr.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageBreadcrumb;