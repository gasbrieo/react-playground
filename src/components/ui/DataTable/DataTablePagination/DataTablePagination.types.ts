import type { Table } from '@tanstack/react-table';
import type { ComponentProps } from 'react';

export interface DataTablePaginationProps<TData> extends ComponentProps<'div'> {
  table: Table<TData>;
  pageSizeOptions?: number[];
}
