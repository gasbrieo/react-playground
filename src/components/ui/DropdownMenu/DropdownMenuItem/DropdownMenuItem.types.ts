import type * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ComponentProps } from "react";

export interface DropdownMenuItemProps extends ComponentProps<typeof DropdownMenuPrimitive.Item> {
  inset?: boolean;
  variant?: "default" | "destructive";
}
