import type { Column } from "@tanstack/react-table";
import type { HTMLAttributes } from "react";

export interface DataTableColumnHeaderProps<TData, TValue> extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}
