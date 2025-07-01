import * as DialogPrimitive from "@radix-ui/react-dialog";

import type { DialogTriggerProps } from "./DialogTrigger.types";

export const DialogTrigger = ({ ...props }: DialogTriggerProps) => {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
};
