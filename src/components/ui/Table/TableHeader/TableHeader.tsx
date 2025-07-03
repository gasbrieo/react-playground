import { cn } from "~/utils/cn";

import type { TableHeaderProps } from "./TableHeader.types";

export const TableHeader = ({ className, ...props }: TableHeaderProps) => {
  return <thead data-slot="table-header" className={cn("[&_tr]:border-b", className)} {...props} />;
};
