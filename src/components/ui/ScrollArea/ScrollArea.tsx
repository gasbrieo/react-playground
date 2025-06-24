import { cn } from '@/utils/cn';
import { Viewport, Root, Corner } from '@radix-ui/react-scroll-area';
import { ScrollBar } from './ScrollBar';
import type { ScrollAreaProps } from './ScrollArea.types';

export const ScrollArea = ({ className, children, ...props }: ScrollAreaProps) => {
  return (
    <Root data-slot="scroll-area" className={cn('relative', className)} {...props}>
      <Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </Viewport>
      <ScrollBar />
      <Corner />
    </Root>
  );
};
