import { cn } from "~/utils/cn";

import type { CommandShortcutProps } from "./CommandShortcut.types";

export const CommandShortcut = ({ className, ...props }: CommandShortcutProps) => {
  return (
    <span
      data-slot="command-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  );
};
