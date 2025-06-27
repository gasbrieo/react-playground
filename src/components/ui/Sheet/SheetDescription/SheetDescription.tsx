import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cn } from "~/utils/cn";

import type { SheetDescriptionProps } from "./SheetDescription.types";

export const SheetDescription = ({ className, ...props }: SheetDescriptionProps) => {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};
