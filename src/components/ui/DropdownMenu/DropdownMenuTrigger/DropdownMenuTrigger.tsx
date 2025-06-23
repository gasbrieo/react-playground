import { Trigger } from '@radix-ui/react-dropdown-menu';

import type { DropdownMenuTriggerProps } from './DropdownMenuTrigger.types';

export const DropdownMenuTrigger = ({ ...props }: DropdownMenuTriggerProps) => {
  return <Trigger data-slot="dropdown-menu-trigger" {...props} />;
};
