import { useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import type { PagedList } from '@/types/paged-list';
import type { ListUsersParams, UserResponse } from '@/types/users';

const listUsers = async (params: ListUsersParams): Promise<PagedList<UserResponse>> => {
  const response = await api.get<PagedList<UserResponse>>('/api/v1/users', {
    params: params,
  });

  return response.data;
};

export const useListUsers = (params: ListUsersParams) => {
  return useQuery({
    queryKey: ['users', 'list', params],
    queryFn: () => listUsers(params),
  });
};
