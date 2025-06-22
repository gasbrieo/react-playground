import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { renderHook } from '@/testing/test-utils';
import type { ListUsersParams } from '@/types/users';

import { useListUsers } from './use-list-users';

vi.mock('@/lib/api-client', () => ({
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
