import { Item } from '@radix-ui/react-dropdown-menu';
import type { ComponentProps } from 'react';

export interface DropdownMenuItemProps extends ComponentProps<typeof Item> {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}
