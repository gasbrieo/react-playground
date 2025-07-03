import type { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps } from "react";

export interface CommandEmptyProps extends ComponentProps<typeof CommandPrimitive.Empty> {}
