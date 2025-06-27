import { cn } from "~/utils/cn";

import type { BreadcrumbItemProps } from "./BreadcrumbItem.types";

export const BreadcrumbItem = ({ className, ...props }: BreadcrumbItemProps) => {
  return <li data-slot="breadcrumb-item" className={cn("inline-flex items-center gap-1.5", className)} {...props} />;
};
