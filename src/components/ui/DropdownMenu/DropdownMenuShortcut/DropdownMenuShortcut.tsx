import { cn } from "~/utils/cn";

import type { DropdownMenuShortcutProps } from "./DropdownMenuShortcut.types";

export const DropdownMenuShortcut = ({ className, ...props }: DropdownMenuShortcutProps) => {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  );
};
