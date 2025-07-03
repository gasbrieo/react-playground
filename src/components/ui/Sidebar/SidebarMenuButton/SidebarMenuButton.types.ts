import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import type { TooltipContentProps } from "../../Tooltip";

import type { sidebarMenuButtonVariants } from "./SidebarMenuButton.variants";

export interface SidebarMenuButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | TooltipContentProps;
}
