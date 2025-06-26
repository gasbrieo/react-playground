import { queryOptions } from "@tanstack/react-query";

import { ProductsFilterSchema } from "../schemas/productsFilter";

import { getProducts } from "./serverFns";

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
