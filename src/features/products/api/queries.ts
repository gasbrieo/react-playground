import { queryOptions } from "@tanstack/react-query";
import { getProducts } from "./serverFns";
import { ProductsFilterSchema } from "../schemas/productsFilter";

export const productsQueries = {
  all: ["products"],
  list: (filters: ProductsFilterSchema) =>
    queryOptions({
      queryKey: [...productsQueries.all, "list", filters],
      queryFn: () =>
        getProducts({
          data: filters,
        }),
    }),
};
