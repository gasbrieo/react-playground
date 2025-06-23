import { Root } from '@radix-ui/react-dropdown-menu';

import type { DropdownMenuProps } from './DropdownMenu.types';

export const DropdownMenu = ({ ...props }: DropdownMenuProps) => {
  return <Root data-slot="dropdown-menu" {...props} />;
};
