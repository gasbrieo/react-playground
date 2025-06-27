import { cn } from "~/utils/cn";

import type { SidebarMenuItemProps } from "./SidebarMenuItem.types";

export const SidebarMenuItem = ({ className, ...props }: SidebarMenuItemProps) => {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
};
