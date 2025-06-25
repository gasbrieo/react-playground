import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import axios from "redaxios";
import { Product, ProductsFilters } from "./products.types";

export const fetchProducts = createServerFn({ method: "GET" })
  .validator((d: ProductsFilters) => d)
  .handler(async ({ data }) => {
    console.info(`Fetching products with filters ${data}...`);
    return axios
      .get<Array<Product>>("https://jsonplaceholder.typicode.com/users")
      .then((r) => {
        const { page = 1, pageSize = 10 } = data;

        const totalCount = r.data.length;
        const totalPages = Math.ceil(totalCount / pageSize);
        const paginatedProducts = r.data.slice(
          (page - 1) * pageSize,
          page * pageSize
        );

        return {
          products: paginatedProducts,
          pagination: {
            page,
            pageSize,
            totalCount,
            totalPages,
          },
        };
      });
  });

export const productsQueryOptions = (filters: ProductsFilters = {}) =>
  queryOptions({
    queryKey: ["products"],
    queryFn: () => fetchProducts({ data: filters }),
  });
