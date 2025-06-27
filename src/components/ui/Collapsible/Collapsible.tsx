import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

import type { CollapsibleProps } from "./Collapsible.types";

export const Collapsible = ({ ...props }: CollapsibleProps) => {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
};
