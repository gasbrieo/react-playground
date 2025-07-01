import type * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ComponentProps } from "react";

export interface DialogContentProps extends ComponentProps<typeof DialogPrimitive.Content> {
  showCloseButton?: boolean;
}
