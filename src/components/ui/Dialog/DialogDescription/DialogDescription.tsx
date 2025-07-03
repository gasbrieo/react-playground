import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "~/utils/cn";

import type { DialogDescriptionProps } from "./DialogDescription.types";

export const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};
