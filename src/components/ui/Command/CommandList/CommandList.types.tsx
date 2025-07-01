import type { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps } from "react";

export interface CommandListProps extends ComponentProps<typeof CommandPrimitive.List> {}
