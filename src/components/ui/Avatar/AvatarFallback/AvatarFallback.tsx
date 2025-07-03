import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "~/utils/cn";

import type { AvatarFallbackProps } from "./AvatarFallback.types";

export const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn("bg-muted flex size-full items-center justify-center rounded-full", className)}
      {...props}
    />
  );
};
