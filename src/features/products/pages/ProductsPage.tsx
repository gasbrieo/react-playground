import { useSuspenseQuery } from "@tanstack/react-query";
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
        <ProductsTable data={data} onPaginationChange={handlePaginationChange} />
      </Suspense>
    </div>
  );
};
