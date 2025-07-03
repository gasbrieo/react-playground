import { Loader2Icon } from "lucide-react";

import { cn } from "~/utils/cn";

import { Button } from "../../Button";
import { useFormContext } from "../FormItemContext";

import type { SubmitButtonProps } from "./SubmitButton.types";

export const SubmitButton = ({ children, className, ...props }: SubmitButtonProps) => {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
      {([canSubmit, isSubmitting]) => (
        <Button className={cn("w-full", className)} disabled={!canSubmit} type="submit" {...props}>
          {children}
          {isSubmitting && <Loader2Icon className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
      )}
    </form.Subscribe>
  );
};
