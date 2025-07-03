/* eslint-disable sonarjs/table-header */

import { cn } from "~/utils/cn";

import type { TableProps } from "./Table.types";

export const Table = ({ className, ...props }: TableProps) => {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table data-slot="table" className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  );
};
