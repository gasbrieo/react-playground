import { type ColumnDef } from "@tanstack/react-table";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onPaginationChange?: (page: number, pageSize: number) => void;
  serverSide?: boolean;
  pagination?: {
    pageIndex: number;
    pageSize: number;
    pageCount: number;
  };
}
