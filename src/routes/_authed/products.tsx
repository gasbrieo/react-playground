import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import {
  ProductsFilters,
  ProductsPage,
  productsQueryOptions,
} from "~/features/products";
import { seo } from "~/utils/seo";

const productsSearchSchema = z.object({
  page: z.number().optional(),
  pageSize: z.number().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.union([z.literal("asc"), z.literal("desc"), z.undefined()]),
  name: z.string().optional(),
  category: z.string().optional(),
  status: z.string().optional(),
});

export const Route = createFileRoute("/_authed/products")({
  component: ProductsPage,
  validateSearch: (search) => productsSearchSchema.parse(search),
  loaderDeps: ({ search }) => ({
    page: search.page,
    pageSize: search.pageSize,
    sortBy: search.sortBy,
    sortOrder: search.sortOrder,
    name: search.name,
    category: search.category,
    status: search.status,
  }),
  loader: async ({ context, deps }) => {
    const filters: ProductsFilters = {
      page: deps.page,
      pageSize: deps.pageSize,
      sortBy: deps.sortBy,
      sortOrder: deps.sortOrder,
      name: deps.name,
      category: deps.category,
      status: deps.status,
    };

    await context.queryClient.ensureQueryData(productsQueryOptions(filters));
  },
  head: () => ({
    meta: [
      ...seo({
        title: "Products | Server-side Pagination with TanStack Table",
        description:
          "Product table with server-side pagination using React Query and TanStack Table. Filtered, paginated, and synced via URL search params.",
      }),
      ,
    ],
  }),
});
