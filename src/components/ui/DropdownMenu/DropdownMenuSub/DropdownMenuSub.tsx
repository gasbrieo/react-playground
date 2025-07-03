import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import type { DropdownMenuSubProps } from "./DropdownMenuSub.types";

export const DropdownMenuSub = ({ ...props }: DropdownMenuSubProps) => {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
};
