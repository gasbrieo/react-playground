import { Portal } from '@radix-ui/react-dropdown-menu';

import type { DropdownMenuPortalProps } from './DropdownMenuPortal.types';

export const DropdownMenuPortal = ({ ...props }: DropdownMenuPortalProps) => {
  return <Portal data-slot="dropdown-menu-portal" {...props} />;
};
