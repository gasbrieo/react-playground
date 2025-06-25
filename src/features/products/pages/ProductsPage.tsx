import { Route } from "~/routes/_authed/products";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductsTable } from "../components/ProductsTable";
import { productsQueries } from "../api/queries";

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
