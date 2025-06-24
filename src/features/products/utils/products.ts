import { api } from '@/lib/apiClient';
import type { PagedList } from '@/types/pagedList';
import type { Product } from '../types/products';
import { queryOptions } from '@tanstack/react-query';

export type ProductsFilters = {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  name?: string;
  category?: string;
  status?: string;
};

export const productsQueryOptions = (filters: ProductsFilters = {}) =>
  queryOptions({
    queryKey: ['products', filters],
    queryFn: async () =>
      api
        .get<PagedList<Product>>('/api/v1/products', {
          params: {
            page: 1,
            pageSize: 100,
          },
        })
        .then((r) => r.data)
        .catch(() => {
          throw new Error('Failed to fetch products');
        }),
  });
