import { useId } from "react";

import { cn } from "~/utils/cn";

import { FormItemContext } from "../FormItemContext";

import type { FormItemProps } from "./FormItem.types";

export const FormItem = ({ className, ...props }: FormItemProps) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
};
