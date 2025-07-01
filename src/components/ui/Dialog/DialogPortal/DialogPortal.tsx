import * as DialogPrimitive from "@radix-ui/react-dialog";

import type { DialogPortalProps } from "./DialogPortal.types";

export const DialogPortal = ({ ...props }: DialogPortalProps) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
};
