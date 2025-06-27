import { cn } from "~/utils/cn";

import { Input } from "../../Input";

import type { SidebarInputProps } from "./SidebarInput.types";

export const SidebarInput = ({ className, ...props }: SidebarInputProps) => {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  );
};
