import type { Table } from '@tanstack/react-table';
import type { ComponentProps, ReactNode } from 'react';

export interface DataTableProps<TData> extends ComponentProps<'div'> {
  table: Table<TData>;
  actionBar?: ReactNode;
}
