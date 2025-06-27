import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "~/utils/cn";

import type { DropdownMenuLabelProps } from "./DropdownMenuLabel.types";

export const DropdownMenuLabel = ({ className, inset, ...props }: DropdownMenuLabelProps) => {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      {...props}
    />
  );
};
