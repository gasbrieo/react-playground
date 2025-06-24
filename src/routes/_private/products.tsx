import type { ProductsFilters } from '@/features/products/utils/products';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const productsSearchSchema = z.object({
  page: z.number().optional(),
  pageSize: z.number().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.union([z.literal('asc'), z.literal('desc'), z.undefined()]),
  name: z.string().optional(),
  category: z.string().optional(),
  status: z.string().optional(),
});

export const Route = createFileRoute('/dashboard/products')({
  component: () => {
    return <div>productspage</div>;
  },
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

    // Prefetch data using React Query
    await context.queryClient.ensureQueryData(productsQueryOptions(filters));
  },
});
