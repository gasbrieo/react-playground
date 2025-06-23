import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from '@tanstack/react-router';
import { useState, type FC } from 'react';

import { queryConfig } from '@/lib/reactQuery';

interface TestWrapperProps {
  children: ReactNode;
}

export const TestWrapper: FC<TestWrapperProps> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>;
};
