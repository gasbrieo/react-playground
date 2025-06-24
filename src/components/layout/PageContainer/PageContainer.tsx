import { ScrollArea } from '@/components/ui/ScrollArea';
import type { PageContainerProps } from './PageContainer.types';

export const PageContainer = ({ children, scrollable }: PageContainerProps) => {
  return (
    <>
      {scrollable ? (
        <ScrollArea className="h-[calc(100dvh-52px)]">
          <div className="flex flex-1 p-4 md:px-6">{children}</div>
        </ScrollArea>
      ) : (
        <div className="flex flex-1 p-4 md:px-6">{children}</div>
      )}
    </>
  );
};
