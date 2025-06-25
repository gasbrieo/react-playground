import { Route } from "~/routes/_authed/products";
import { ProductsFilters } from "../../types/products";
import { useSuspenseQuery } from "@tanstack/react-query";
import { productsQueryOptions } from "../../api/getProducts";
import { ProductsTable } from "../../components/ProductsTable";

export const ProductsPage = () => {
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
