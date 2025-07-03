import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import type { DropdownMenuTriggerProps } from "./DropdownMenuTrigger.types";

export const DropdownMenuTrigger = ({ ...props }: DropdownMenuTriggerProps) => {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
};
