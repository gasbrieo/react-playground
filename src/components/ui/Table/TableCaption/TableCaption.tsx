import { cn } from "~/utils/cn";

import type { TableCaptionProps } from "./TableCaption.types";

export const TableCaption = ({ className, ...props }: TableCaptionProps) => {
  return (
    <caption data-slot="table-caption" className={cn("text-muted-foreground mt-4 text-sm", className)} {...props} />
  );
};
