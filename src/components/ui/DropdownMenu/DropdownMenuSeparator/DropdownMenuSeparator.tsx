import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "~/utils/cn";

import type { DropdownMenuSeparatorProps } from "./DropdownMenuSeparator.types";

export const DropdownMenuSeparator = ({ className, ...props }: DropdownMenuSeparatorProps) => {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
};
