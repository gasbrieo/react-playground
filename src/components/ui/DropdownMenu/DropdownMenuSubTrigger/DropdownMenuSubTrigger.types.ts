import type * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ComponentProps } from "react";

export interface DropdownMenuSubTriggerProps extends ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
  inset?: boolean;
}
