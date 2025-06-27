import { MoreHorizontalIcon } from "lucide-react";

import { cn } from "~/utils/cn";

import type { BreadcrumbEllipsisProps } from "./BreadcrumbEllipsis.types";

export const BreadcrumbEllipsis = ({ className, ...props }: BreadcrumbEllipsisProps) => {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
};
