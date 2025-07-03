import { ChevronRightIcon } from "lucide-react";

import { cn } from "~/utils/cn";

import type { BreadcrumbSeparatorProps } from "./BreadcrumbSeparator.types";

export const BreadcrumbSeparator = ({ children, className, ...props }: BreadcrumbSeparatorProps) => {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  );
};
