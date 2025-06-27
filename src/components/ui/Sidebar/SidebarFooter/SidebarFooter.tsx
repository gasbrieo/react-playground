import { cn } from "~/utils/cn";

import type { SidebarFooterProps } from "./SidebarFooter.types";

export const SidebarFooter = ({ className, ...props }: SidebarFooterProps) => {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
};
