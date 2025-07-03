import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import type { TooltipTriggerProps } from "./TooltipTrigger.types";

export const TooltipTrigger = ({ ...props }: TooltipTriggerProps) => {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
};
