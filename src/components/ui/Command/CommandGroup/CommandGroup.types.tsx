import type { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps } from "react";

export interface CommandGroupProps extends ComponentProps<typeof CommandPrimitive.Group> {}
