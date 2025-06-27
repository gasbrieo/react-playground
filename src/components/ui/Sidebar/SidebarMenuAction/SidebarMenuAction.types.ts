import type { ComponentProps } from "react";

export interface SidebarMenuActionProps extends ComponentProps<"button"> {
  asChild?: boolean;
  showOnHover?: boolean;
}
