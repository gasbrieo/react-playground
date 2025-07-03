import type * as SheetPrimitive from "@radix-ui/react-dialog";
import type { ComponentProps } from "react";

export interface SheetContentProps extends ComponentProps<typeof SheetPrimitive.Content> {
  side?: "top" | "right" | "bottom" | "left";
}
