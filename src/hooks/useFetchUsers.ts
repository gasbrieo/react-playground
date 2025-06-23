import { useQuery } from '@tanstack/react-query';

import { api } from '@/lib/apiClient';
import type { PagedList } from '@/types/api';
import type { User } from '@/types/users';

const fetchUsers = async (page: number, pageSize: number) => {
  const response = await api.get<PagedList<User>>('/api/v1/users', {
    params: {
      page,
      pageSize,
    },
  });

  return response.data;
};

export const useFetchUsers = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: ['users', 'fetch', { page, pageSize }],
    queryFn: () => fetchUsers(page, pageSize),
  });
};
