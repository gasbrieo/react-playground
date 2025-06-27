import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import type { DropdownMenuRadioGroupProps } from "./DropdownMenuRadioGroup.types";

export const DropdownMenuRadioGroup = ({ ...props }: DropdownMenuRadioGroupProps) => {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
};
