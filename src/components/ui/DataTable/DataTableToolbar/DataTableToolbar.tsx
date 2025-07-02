import { XIcon } from "lucide-react";

import { Button } from "../../Button";
import { DataTableToolbarFilter } from "../DataTableToolbarFilter";
import { DataTableViewOptions } from "../DataTableViewOptions";

import type { DataTableToolbarProps } from "./DataTableToolbar.types";

export const DataTableToolbar = <TData,>({ table }: DataTableToolbarProps<TData>) => {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {table
          .getAllColumns()
          .filter((col) => col.columnDef.meta?.filter)
          .map((col) => (
            <DataTableToolbarFilter key={col.id} column={col} />
          ))}

        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
            Reset
            <XIcon />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
};
