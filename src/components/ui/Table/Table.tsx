import { cn } from '@/utils/cn';

import type { TableProps } from './Table.types';

/* eslint-disable sonarjs/table-header */
export const Table = ({ className, ...props }: TableProps) => {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table data-slot="table" className={cn('w-full caption-bottom text-sm', className)} {...props} />
    </div>
  );
};
/* eslint-enable sonarjs/table-header */
