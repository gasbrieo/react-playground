import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "~/utils/cn";

import type { AvatarImageProps } from "./AvatarImage.types";

export const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image data-slot="avatar-image" className={cn("aspect-square size-full", className)} {...props} />
  );
};
