import * as SelectPrimitive from "@radix-ui/react-select";

import type { SelectProps } from "./Select.types";

export const Select = ({ ...props }: SelectProps) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
};
