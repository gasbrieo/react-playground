import * as SelectPrimitive from "@radix-ui/react-select";

import type { SelectValueProps } from "./SelectValue.types";

export const SelectValue = ({ ...props }: SelectValueProps) => {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
};
