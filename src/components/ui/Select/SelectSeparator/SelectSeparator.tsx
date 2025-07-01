import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "~/utils/cn";

import type { SelectSeparatorProps } from "./SelectSeparator.types";

export const SelectSeparator = ({ className, ...props }: SelectSeparatorProps) => {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
};
