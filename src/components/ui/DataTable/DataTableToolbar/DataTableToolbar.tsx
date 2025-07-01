import { Input } from "../../Input";
import { DataTableViewOptions } from "../DataTableViewOptions";

import type { DataTableToolbarProps } from "./DataTableToolbar.types";

export const DataTableToolbar = <TData,>({ table }: DataTableToolbarProps<TData>) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter users..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
};
