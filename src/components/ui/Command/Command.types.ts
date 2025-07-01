import type { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps } from "react";

export interface CommandProps extends ComponentProps<typeof CommandPrimitive> {}
