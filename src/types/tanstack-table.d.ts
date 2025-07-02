import type { RowData } from "@tanstack/react-table";

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    filter?: {
      type: "text" | "select";
      title?: string;
      options?: { label: string; value: string }[];
    };
  }
}
