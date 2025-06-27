import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import type { TooltipProviderProps } from "./TooltipProvider.types";

export const TooltipProvider = ({ delayDuration = 0, ...props }: TooltipProviderProps) => {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" delayDuration={delayDuration} {...props} />;
};
