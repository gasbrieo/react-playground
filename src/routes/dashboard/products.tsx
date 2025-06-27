import { createFileRoute } from "@tanstack/react-router";

import { ProductsPage, productsQueries } from "~/features/products";
import { ProductsFilterSchema } from "~/features/products/schemas/productsFilter";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/dashboard/products")({
  validateSearch: ProductsFilterSchema,
  loaderDeps: ({ search }) => ({
    filters: search,
  }),
  loader: async ({ context, deps }) => {
    await context.queryClient.ensureQueryData(productsQueries.list(deps.filters));
  },
  head: () => ({
    meta: [
      ...seo({
        title: "Products | Server-side Pagination with TanStack Table",
        description:
          "Product table with server-side pagination using React Query and TanStack Table. Filtered, paginated, and synced via URL search params.",
      }),
    ],
  }),
  component: ProductsPage,
});
