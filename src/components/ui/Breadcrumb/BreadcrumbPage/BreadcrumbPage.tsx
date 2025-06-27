import { cn } from "~/utils/cn";

import type { BreadcrumbPageProps } from "./BreadcrumbPage.types";

export const BreadcrumbPage = ({ className, ...props }: BreadcrumbPageProps) => {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  );
};
