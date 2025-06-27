import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "~/utils/cn";

import type { AvatarProps } from "./Avatar.types";

export const Avatar = ({ className, ...props }: AvatarProps) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  );
};
