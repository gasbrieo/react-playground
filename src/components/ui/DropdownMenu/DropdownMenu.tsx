import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import type { DropdownMenuProps } from "./DropdownMenu.types";

export const DropdownMenu = ({ ...props }: DropdownMenuProps) => {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
};
