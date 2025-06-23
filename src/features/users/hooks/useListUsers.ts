import { useQuery } from '@tanstack/react-query';

import { api } from '@/lib/apiClient';
import type { PagedList, ListUsersParams, UserResponse } from '@/types/api';

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
