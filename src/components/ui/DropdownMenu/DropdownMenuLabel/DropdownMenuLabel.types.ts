import type * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ComponentProps } from "react";

export interface DropdownMenuLabelProps extends ComponentProps<typeof DropdownMenuPrimitive.Label> {
  inset?: boolean;
}
