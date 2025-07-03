import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import type { DropdownMenuGroupProps } from "./DropdownMenuGroup.types";

export const DropdownMenuGroup = ({ ...props }: DropdownMenuGroupProps) => {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
};
