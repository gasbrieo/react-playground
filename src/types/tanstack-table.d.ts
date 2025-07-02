import type { RowData } from "@tanstack/react-table";

interface TextFilterMeta {
  type: "text";
  title?: string;
}

interface SelectFilterMeta {
  type: "select";
  title?: string;
  options: { label: string; value: string }[];
}

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    filter?: TextFilterMeta | SelectFilterMeta;
  }
}
