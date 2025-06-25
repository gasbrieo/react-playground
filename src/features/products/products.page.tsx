import { Route } from "~/routes/products";
import { ProductsFilters } from "./products.types";
import { useSuspenseQuery } from "@tanstack/react-query";
import { productsQueryOptions } from "./products.api";
import { ProductsTable } from "./products.table";

export const ProductPage = () => {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();

  const filters: ProductsFilters = {
    page: search.page,
    pageSize: search.pageSize,
    sortBy: search.sortBy,
    sortOrder: search.sortOrder,
    name: search.name,
    category: search.category,
    status: search.status,
  };

  const { data } = useSuspenseQuery(productsQueryOptions(filters));

  const handlePaginationChange = (page: number, pageSize: number) => {
    navigate({
      search: {
        ...search,
        page: page,
        pageSize: pageSize,
      },
      replace: true,
    });
  };

  return (
    <div>
      <ProductsTable data={data} onPaginationChange={handlePaginationChange} />
    </div>
  );
};
