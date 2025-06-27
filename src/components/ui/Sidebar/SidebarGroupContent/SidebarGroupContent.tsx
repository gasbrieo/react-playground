import { cn } from "~/utils/cn";

import type { SidebarGroupContentProps } from "./SidebarGroupContent.types";

export const SidebarGroupContent = ({ className, ...props }: SidebarGroupContentProps) => {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  );
};
