import { Slot } from "@radix-ui/react-slot";

import { cn } from "~/utils/cn";

import { Tooltip, TooltipContent, TooltipTrigger } from "../../Tooltip";
import { useSidebar } from "../SidebarContext";

import type { SidebarMenuButtonProps } from "./SidebarMenuButton.types";
import { sidebarMenuButtonVariants } from "./SidebarMenuButton.variants";

export const SidebarMenuButton = ({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: SidebarMenuButtonProps) => {
  const Comp = asChild ? Slot : "button";

  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
    </Tooltip>
  );
};
