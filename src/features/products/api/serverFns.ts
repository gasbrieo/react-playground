import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import axios from "redaxios";
import z from "zod";
import { Product } from "../types/products";
import { ProductsFilterSchema } from "../schemas/productsFilter";

export const getProducts = createServerFn({ method: "GET" })
  .validator(ProductsFilterSchema)
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
