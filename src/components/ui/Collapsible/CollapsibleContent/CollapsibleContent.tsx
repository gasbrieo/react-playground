import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

import type { CollapsibleContentProps } from "./CollapsibleContent.types";

export const CollapsibleContent = ({ ...props }: CollapsibleContentProps) => {
  return <CollapsiblePrimitive.CollapsibleContent data-slot="collapsible-content" {...props} />;
};
