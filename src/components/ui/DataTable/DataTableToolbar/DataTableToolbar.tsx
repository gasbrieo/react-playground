import { XIcon } from "lucide-react";

import { UserRole, UserStatus } from "~/features/users/types/users";

import { Button } from "../../Button";
import { Input } from "../../Input";
import { DataTableFacetedFilter } from "../DataTableFacetedFilter";
import { DataTableViewOptions } from "../DataTableViewOptions";

import type { DataTableToolbarProps } from "./DataTableToolbar.types";

export const DataTableToolbar = <TData,>({ table }: DataTableToolbarProps<TData>) => {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter users..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter column={table.getColumn("status")} title="Status" options={UserStatus} />
        )}
        {table.getColumn("role") && (
          <DataTableFacetedFilter column={table.getColumn("role")} title="Priority" options={UserRole} />
        )}
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
