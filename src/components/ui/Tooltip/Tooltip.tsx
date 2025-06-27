import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import type { TooltipProps } from "./Tooltip.types";
import { TooltipProvider } from "./TooltipProvider";

export const Tooltip = ({ ...props }: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
};
