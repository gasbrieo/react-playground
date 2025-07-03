import type { Column } from "@tanstack/react-table";

export interface DataTableToolbarFilterProps<TData> {
  column: Column<TData>;
}

export interface FilterMeta {
  type: "text" | "select";
  title?: string;
  options?: { label: string; value: string }[];
}
