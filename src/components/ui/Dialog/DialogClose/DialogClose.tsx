import * as DialogPrimitive from "@radix-ui/react-dialog";

import type { DialogCloseProps } from "./DialogClose.types";

export const DialogClose = ({ ...props }: DialogCloseProps) => {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
};
