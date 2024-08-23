"use client";

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { usePathname } from "next/navigation";

const PageBreadcrumb = () => {
  const pathname = usePathname();
  const pathArr = pathname.split("/").filter(Boolean); // Filter out empty strings (in case the pathname starts with "/")

  let accumulatedPath = "";

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {pathArr.map((path, index) => {
          accumulatedPath += `/${path}`; // Accumulate the full path for each breadcrumb

          const label = path.replace(/-/g, " ");

          return (
            <>
            <BreadcrumbItem key={accumulatedPath}>
              <BreadcrumbLink asChild>
                <Link href={accumulatedPath} className="capitalize">
                  {label}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < pathArr.length - 1 && <BreadcrumbSeparator />} {/* Add separator except after the last item */}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
