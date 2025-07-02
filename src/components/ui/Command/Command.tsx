import { Command as CommandPrimitive } from "cmdk";

import { cn } from "~/utils/cn";

import type { CommandProps } from "./Command.types";

export const Command = ({ className, ...props }: CommandProps) => {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className,
      )}
      {...props}
    />
  );
};
