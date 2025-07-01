import type { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps } from "react";

export interface CommandInputProps extends ComponentProps<typeof CommandPrimitive.Input> {}
