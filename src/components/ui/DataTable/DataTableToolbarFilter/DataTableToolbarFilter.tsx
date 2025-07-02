import { Input } from "../../Input";
import { DataTableFacetedFilter } from "../DataTableFacetedFilter";

import type { DataTableToolbarFilterProps, FilterMeta } from "./DataTableToolbarFilter.types";

export const DataTableToolbarFilter = <TData,>({ column }: DataTableToolbarFilterProps<TData>) => {
  const filter = column.columnDef.meta?.filter as FilterMeta | undefined;

  if (!filter) return null;

  switch (filter.type) {
    case "text":
      return (
        <Input
          placeholder={`Filter ${column.id}...`}
          value={(column.getFilterValue() as string) ?? ""}
          onChange={(e) => column.setFilterValue(e.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
      );

    case "select":
      return (
        <DataTableFacetedFilter column={column} title={filter.title ?? column.id} options={filter.options ?? []} />
      );

    default:
      return null;
  }
};
