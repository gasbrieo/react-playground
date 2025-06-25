import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import axios from "redaxios";
import z from "zod";
import { Product, ProductsFilters } from "../types/products";

export const getProducts = createServerFn({ method: "GET" })
  .validator(
    z.object({
      page: z.number().default(0),
      pageSize: z.number().default(5),
      sortBy: z.string().optional(),
      sortOrder: z.enum(["asc", "desc"]).optional(),
      filters: z
        .object({
          name: z.string().optional(),
          category: z.string().optional(),
          status: z.string().optional(),
        })
        .optional(),
    })
  )
  .handler(async ({ data }) => {
    const { page, pageSize } = data;

    return axios
      .get<Product[]>("https://jsonplaceholder.typicode.com/users")
      .then((r) => {
        const totalCount = r.data.length;
        const totalPages = Math.ceil(totalCount / pageSize);
        const paginatedProducts = r.data.slice(
          page * pageSize,
          (page + 1) * pageSize
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
    queryKey: ["products", filters],
    queryFn: () =>
      getProducts({
        data: {
          page: filters.page,
          pageSize: filters.pageSize,
          sortBy: filters.sortBy,
          sortOrder: filters.sortOrder,
          filters: {
            name: filters.name,
            category: filters.category,
            status: filters.status,
          },
        },
      }),
  });
