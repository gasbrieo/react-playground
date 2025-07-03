import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cn } from "~/utils/cn";

import type { SheetTitleProps } from "./SheetTitle.types";

export const SheetTitle = ({ className, ...props }: SheetTitleProps) => {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
};
