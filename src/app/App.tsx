import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { type FC, Suspense, useState } from 'react';

import { Toaster } from '@/components/ui/Toaster';
import { queryConfig } from '@/lib/reactQuery';
import { routeTree } from '@/routeTree.gen';

const router = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const App: FC = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV && <ReactQueryDevtools />}
        <Toaster position="top-right" theme="light" richColors closeButton />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
  );
};
