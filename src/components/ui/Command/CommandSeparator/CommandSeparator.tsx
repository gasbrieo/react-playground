import { Command as CommandPrimitive } from "cmdk";

import { cn } from "~/utils/cn";

import type { CommandSeparatorProps } from "./CommandSeparator.types";

export const CommandSeparator = ({ className, ...props }: CommandSeparatorProps) => {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  );
};
