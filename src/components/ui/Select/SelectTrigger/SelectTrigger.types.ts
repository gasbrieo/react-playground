import type * as SelectPrimitive from "@radix-ui/react-select";
import type { ComponentProps } from "react";

export interface SelectTriggerProps extends ComponentProps<typeof SelectPrimitive.Trigger> {
  size?: "sm" | "default";
}
