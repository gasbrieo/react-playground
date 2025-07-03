import * as SheetPrimitive from "@radix-ui/react-dialog";

import type { SheetCloseProps } from "./SheetClose.types";

export const SheetClose = ({ ...props }: SheetCloseProps) => {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
};
