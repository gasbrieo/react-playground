import { PanelLeftIcon } from "lucide-react";

import { cn } from "~/utils/cn";

import { Button } from "../../Button";
import { useSidebar } from "../SidebarContext";

import type { SidebarTriggerProps } from "./SidebarTrigger.types";

export const SidebarTrigger = ({ className, onClick, ...props }: SidebarTriggerProps) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};
