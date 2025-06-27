import * as SheetPrimitive from "@radix-ui/react-dialog";

import type { SheetPortalProps } from "./SheetPortal.types";

export const SheetPortal = ({ ...props }: SheetPortalProps) => {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
};
