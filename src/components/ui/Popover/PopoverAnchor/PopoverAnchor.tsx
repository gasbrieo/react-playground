import * as PopoverPrimitive from "@radix-ui/react-popover";

import type { PopoverAnchorProps } from "./PopoverAnchor.types";

export const PopoverAnchor = ({ ...props }: PopoverAnchorProps) => {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
};
