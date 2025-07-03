import type { DialogProps } from "../../Dialog";

export interface CommandDialogProps extends DialogProps {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
}
