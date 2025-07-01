import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "~/utils/cn";

import type { DialogTitleProps } from "./DialogTitle.types";

export const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
};
