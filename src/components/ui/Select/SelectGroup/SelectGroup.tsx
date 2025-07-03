import * as SelectPrimitive from "@radix-ui/react-select";

import type { SelectGroupProps } from "./SelectGroup.types";

export const SelectGroup = ({ ...props }: SelectGroupProps) => {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
};
