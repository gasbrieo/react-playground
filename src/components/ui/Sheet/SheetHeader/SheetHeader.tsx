import { cn } from "~/utils/cn";

import type { SheetHeaderProps } from "./SheetHeader.types";

export const SheetHeader = ({ className, ...props }: SheetHeaderProps) => {
  return <div data-slot="sheet-header" className={cn("flex flex-col gap-1.5 p-4", className)} {...props} />;
};
