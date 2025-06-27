import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

import type { CollapsibleTriggerProps } from "./CollapsibleTrigger.types";

export const CollapsibleTrigger = ({ ...props }: CollapsibleTriggerProps) => {
  return <CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props} />;
};
