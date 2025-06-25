import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Product } from "../types/products";

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
}

export const ProductsTable = ({
  data,
  onPaginationChange,
}: ProductsTableProps) => {
  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
  ];

  const table = useReactTable({
    data: data.products,
    columns,
    pageCount: data.pagination.totalPages,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: (updaterOrValue) => {
      if (onPaginationChange) {
        const newValue =
          typeof updaterOrValue === "function"
            ? updaterOrValue(table.getState().pagination)
            : updaterOrValue;
        onPaginationChange(newValue.pageIndex, newValue.pageSize);
      }
    },
    state: {
      pagination: {
        pageIndex: data.pagination.page,
        pageSize: data.pagination.pageSize,
      },
    },
  });

  return (
    <div>
      <table border={1}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of
          {table.getPageCount()}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};
