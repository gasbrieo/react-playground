import type { Slot } from "@radix-ui/react-slot";
import { ComponentProps } from "react";

import { LabelProps } from "../Label";

export interface FormItemContextProps {
  id: string;
}

export interface FormItemProps extends ComponentProps<"div"> {}

export interface FormLabelProps extends LabelProps {}

export interface FormControlProps extends ComponentProps<typeof Slot> {}

export interface FormDescriptionProps extends ComponentProps<"p"> {}

export interface FormMessageProps extends ComponentProps<"p"> {}

export interface SubmitButtonProps extends ComponentProps<"button"> {}
