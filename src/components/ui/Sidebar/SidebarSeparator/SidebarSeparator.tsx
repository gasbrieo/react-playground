import { cn } from "~/utils/cn";

import { Separator } from "../../Separator";

import type { SidebarSeparatorProps } from "./SidebarSeparator.types";

export const SidebarSeparator = ({ className, ...props }: SidebarSeparatorProps) => {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  );
};
