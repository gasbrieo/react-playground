import type { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps } from "react";

export interface CommandItemProps extends ComponentProps<typeof CommandPrimitive.Item> {}
