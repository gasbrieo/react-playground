import { cn } from "~/utils/cn";

import type { TableBodyProps } from "./TableBody.types";

export const TableBody = ({ className, ...props }: TableBodyProps) => {
  return <tbody data-slot="table-body" className={cn("[&_tr:last-child]:border-0", className)} {...props} />;
};
