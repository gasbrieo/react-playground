import * as PopoverPrimitive from "@radix-ui/react-popover";

import type { PopoverTriggerProps } from "./PopoverTrigger.types";

export const PopoverTrigger = ({ ...props }: PopoverTriggerProps) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
};
