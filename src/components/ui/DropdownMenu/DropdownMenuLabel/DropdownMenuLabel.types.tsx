import { Label } from '@radix-ui/react-dropdown-menu';
import type { ComponentProps } from 'react';

export interface DropdownMenuLabelProps extends ComponentProps<typeof Label> {
  inset?: boolean;
}
