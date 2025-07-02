import type { ColumnDef, ColumnFiltersState, SortingState } from "@tanstack/react-table";

import { Checkbox } from "~/components/ui/Checkbox";
import { DataTable, DataTableColumnHeader } from "~/components/ui/DataTable";

import { ProductStatus, type Product } from "../types/products";

import { ProductsTableAction } from "./ProductsTableAction";

interface ProductsTableProps {
  data: {
    products: Product[];
    pagination: {
      page: number;
      pageSize: number;
      totalPages: number;
    };
  };
  onPaginationChange: (page: number, pageSize: number) => void;
  onSortingChange: (sorting: SortingState) => void;
  onFilterChange: (filters: ColumnFiltersState) => void;
}

export const ProductsTable = ({ data, onPaginationChange, onSortingChange, onFilterChange }: ProductsTableProps) => {
  const columns: ColumnDef<Product>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => <DataTableColumnHeader column={column} title="User" />,
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("name")}</div>,
      meta: {
        filter: {
          type: "text",
          title: "Name",
        },
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
      cell: ({ row }) => {
        const status = ProductStatus.find((status) => status.value === row.getValue("status"));

        if (!status) {
          return null;
        }

        return (
          <div className="flex w-[100px] items-center">
            {status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
            <span>{status.label}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      meta: {
        filter: {
          type: "select",
          title: "Status",
          options: ProductStatus,
        },
      },
    },
    {
      id: "actions",
      cell: ({ row }) => <ProductsTableAction row={row} />,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data.products}
      serverSide
      pagination={{
        pageIndex: data.pagination.page,
        pageSize: data.pagination.pageSize,
        pageCount: data.pagination.totalPages,
      }}
      onPaginationChange={onPaginationChange}
      onSortingChange={onSortingChange}
      onFilterChange={onFilterChange}
    />
  );
};
