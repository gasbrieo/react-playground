import { createFileRoute } from '@tanstack/react-router';

import { PlansListingPage } from '@/features/tables';
import { PageContainer } from '@/components/layout/PageContainer';
import { Suspense } from 'react';

export const Route = createFileRoute('/_private/plans')({
  component: () => {
    return (
      <PageContainer>
        <div className="flex flex-1 flex-col space-y-4">
          <Suspense>
            <PlansListingPage />
          </Suspense>
        </div>
      </PageContainer>
    );
  },
});
