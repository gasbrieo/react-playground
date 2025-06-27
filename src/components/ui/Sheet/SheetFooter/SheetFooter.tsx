import { cn } from "~/utils/cn";

import type { SheetFooterProps } from "./SheetFooter.types";

export const SheetFooter = ({ className, ...props }: SheetFooterProps) => {
  return <div data-slot="sheet-footer" className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />;
};
