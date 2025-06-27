import { cn } from "~/utils/cn";

import type { SidebarMenuSubItemProps } from "./SidebarMenuSubItem.types";

export const SidebarMenuSubItem = ({ className, ...props }: SidebarMenuSubItemProps) => {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  );
};
