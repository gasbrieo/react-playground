import type { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps } from "react";

export interface CommandSeparatorProps extends ComponentProps<typeof CommandPrimitive.Separator> {}
