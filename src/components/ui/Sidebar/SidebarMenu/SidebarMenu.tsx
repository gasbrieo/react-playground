import { cn } from "~/utils/cn";

import type { SidebarMenuProps } from "./SidebarMenu.types";

export const SidebarMenu = ({ className, ...props }: SidebarMenuProps) => {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  );
};
