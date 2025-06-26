import { Slot } from "@radix-ui/react-slot";
import type { FC } from "react";

import { cn } from "~/utils/cn";

import type { ButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.variants";

export const Button: FC<ButtonProps> = ({ className, variant, size, asChild = false, ...props }) => {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};
