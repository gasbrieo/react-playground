import { useQuery } from '@tanstack/react-query';

import { api } from '@/lib/apiClient';
import type { PagedList } from '@/types/pagedList';

import type { Plan } from '../types/plan';

export const getPlans = async () => {
  const response = await api.get<PagedList<Plan>>('/api/v1/plans', {
    params: {
      page: 1,
      pageSize: 100,
    },
  });

  return response.data;
};

export const usePlans = () => {
  return useQuery({
    queryKey: ['plans'],
    queryFn: getPlans,
  });
};
