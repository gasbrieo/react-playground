import { createFormHook, createFormHookContexts, useStore } from "@tanstack/react-form";
import { createContext, useContext } from "react";

import { FormControl, FormDescription, FormItem, FormLabel, FormMessage, SubmitButton } from "./Form";
import { FormItemContextProps } from "./Form.types";

const { fieldContext, formContext, useFieldContext: _useFieldContext, useFormContext } = createFormHookContexts();

export const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormItem,
  },
  formComponents: {
    SubmitButton,
  },
});

export const FormItemContext = createContext<FormItemContextProps>({} as FormItemContextProps);

export const useFieldContext = () => {
  const { id } = useContext(FormItemContext);
  const { name, store, ...fieldContext } = _useFieldContext();
  const errors = useStore(store, (state) => state.meta.errors);

  if (!fieldContext) {
    throw new Error("useFieldContext should be used within <FormItem>");
  }

  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    errors,
    store,
    ...fieldContext,
  };
};

export { useFormContext };
