import { useSuspenseQuery } from "@tanstack/react-query";

import { Route } from "~/routes/_authed/products";

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
    <div>
      <h1>ProductsPage</h1>
      <ProductsTable data={data} onPaginationChange={handlePaginationChange} />
    </div>
  );
};
