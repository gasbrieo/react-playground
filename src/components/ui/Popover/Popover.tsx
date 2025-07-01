import * as PopoverPrimitive from "@radix-ui/react-popover";

import type { PopoverProps } from "./Popover.types";

export const Popover = ({ ...props }: PopoverProps) => {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
};
