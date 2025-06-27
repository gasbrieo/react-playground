import { cn } from "~/utils/cn";

import type { SidebarHeaderProps } from "./SidebarHeader.types";

export const SidebarHeader = ({ className, ...props }: SidebarHeaderProps) => {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
};
