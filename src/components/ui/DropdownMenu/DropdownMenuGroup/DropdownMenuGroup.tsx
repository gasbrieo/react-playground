import { Group } from '@radix-ui/react-dropdown-menu';

import type { DropdownMenuGroupProps } from './DropdownMenuGroup.types';

export const DropdownMenuGroup = ({ ...props }: DropdownMenuGroupProps) => {
  return <Group data-slot="dropdown-menu-group" {...props} />;
};
