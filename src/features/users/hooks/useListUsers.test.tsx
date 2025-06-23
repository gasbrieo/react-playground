import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { api } from '@/lib/apiClient';
import { renderHook } from '@/testing/testUtils';

import { useListUsers } from './useListUsers';

import type { ListUsersParams } from '@/types/api';

vi.mock('@/lib/apiClient', () => ({
  api: {
    get: vi.fn(),
  },
}));

const renderWithQueryClient = (params: ListUsersParams) => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return renderHook(() => useListUsers(params), { wrapper });
};

describe('useListUsers', () => {
  it('calls api.get with correct params', () => {
    const params = { page: 2, pageSize: 5 };

    const { result } = renderWithQueryClient(params);

    expect(api.get).toHaveBeenCalledWith('/api/v1/users', { params });
    expect(result.current.isLoading).toBe(true);
  });
});
