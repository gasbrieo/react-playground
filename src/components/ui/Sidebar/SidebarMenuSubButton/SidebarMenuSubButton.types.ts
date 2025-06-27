import type { ComponentProps } from "react";

export interface SidebarMenuSubButtonProps extends ComponentProps<"a"> {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
}
