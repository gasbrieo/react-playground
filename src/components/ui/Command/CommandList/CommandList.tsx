import { Command as CommandPrimitive } from "cmdk";

import { cn } from "~/utils/cn";

import type { CommandListProps } from "./CommandList.types";

export const CommandList = ({ className, ...props }: CommandListProps) => {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className)}
      {...props}
    />
  );
};
