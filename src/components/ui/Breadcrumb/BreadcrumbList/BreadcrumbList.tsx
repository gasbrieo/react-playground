import { cn } from "~/utils/cn";

import type { BreadcrumbListProps } from "./BreadcrumbList.types";

export const BreadcrumbList = ({ className, ...props }: BreadcrumbListProps) => {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className,
      )}
      {...props}
    />
  );
};
