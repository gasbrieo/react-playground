import { Slot } from "@radix-ui/react-slot";
import { Loader2Icon } from "lucide-react";
import { useId } from "react";

import { cn } from "~/utils/cn";

import { Button } from "../Button";
import { Label } from "../Label";

import { FormItemContext, useFieldContext, useFormContext } from "./Form.context";
import {
  FormControlProps,
  FormDescriptionProps,
  FormItemProps,
  FormLabelProps,
  FormMessageProps,
  SubmitButtonProps,
} from "./Form.types";

export const FormItem = ({ className, ...props }: FormItemProps) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
};

export const FormLabel = ({ className, ...props }: FormLabelProps) => {
  const { formItemId, errors } = useFieldContext();
  return (
    <Label
      data-slot="form-label"
      data-error={!!errors.length}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};

export const FormControl = ({ ...props }: FormControlProps) => {
  const { errors, formItemId, formDescriptionId, formMessageId } = useFieldContext();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={!errors.length ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!errors.length}
      {...props}
    />
  );
};

export const FormDescription = ({ className, ...props }: FormDescriptionProps) => {
  const { formDescriptionId } = useFieldContext();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};

export const FormMessage = ({ className, ...props }: FormMessageProps) => {
  const { errors, formMessageId } = useFieldContext();

  const body = errors.length ? String(errors.at(0)?.message ?? "") : props.children;

  if (!body) return null;

  return (
    <p data-slot="form-message" id={formMessageId} className={cn("text-destructive text-sm", className)} {...props}>
      {body}
    </p>
  );
};

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
