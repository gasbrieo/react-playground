import { cn } from "~/utils/cn";

import type { SidebarGroupProps } from "./SidebarGroup.types";

export const SidebarGroup = ({ className, ...props }: SidebarGroupProps) => {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
};
