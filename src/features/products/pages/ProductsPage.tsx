import { useSuspenseQuery } from "@tanstack/react-query";
import type { ColumnFiltersState, SortingState } from "@tanstack/react-table";
import { Suspense } from "react";

import { Separator } from "~/components/ui/Separator";
import { Route } from "~/routes/dashboard/products";

import { productsQueries } from "../api/queries";
import { ProductsTable } from "../components/ProductsTable";

export const ProductsPage = () => {
  const filters = Route.useSearch();
  const navigate = Route.useNavigate();

  const { data } = useSuspenseQuery(productsQueries.list(filters));

  const handlePaginationChange = (page: number, pageSize: number) => {
    navigate({
      search: {
        ...filters,
        page: page,
        pageSize: pageSize,
      },
      replace: true,
    });
  };

  const handleSortingChange = (updatedSorting: SortingState) => {
    if (updatedSorting.length > 0) {
      navigate({
        search: {
          ...filters,
          sortBy: updatedSorting[0].id,
          sortOrder: updatedSorting[0].desc ? "desc" : "asc",
        },
        replace: true,
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { sortBy, sortOrder, ...rest } = filters;
      navigate({
        search: rest,
        replace: true,
      });
    }
  };

  const handleFilterChange = (updatedFilters: ColumnFiltersState) => {
    const nameFilter = updatedFilters.find((filter) => filter.id === "name");
    const statusFilter = updatedFilters.find((filter) => filter.id === "status");

    const statusValue = Array.isArray(statusFilter?.value) ? statusFilter.value.join(",") : statusFilter?.value;

    navigate({
      search: {
        ...filters,
        name: nameFilter?.value as string | undefined,
        status: statusValue as string | undefined,
        page: 0,
      },
      replace: true,
    });
  };

  return (
    <div className="flex flex-1 flex-col space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground text-sm">Manage products (Server side table functionalities.)</p>
        </div>
      </div>
      <Separator />
      <Suspense>
        <ProductsTable
          data={data}
          onPaginationChange={handlePaginationChange}
          onSortingChange={handleSortingChange}
          onFilterChange={handleFilterChange}
        />
      </Suspense>
    </div>
  );
};
