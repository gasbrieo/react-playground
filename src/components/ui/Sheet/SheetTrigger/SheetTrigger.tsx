import * as SheetPrimitive from "@radix-ui/react-dialog";

import type { SheetTriggerProps } from "./SheetTrigger.types";

export const SheetTrigger = ({ ...props }: SheetTriggerProps) => {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
};
