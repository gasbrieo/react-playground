import type { FC } from 'react';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

export const Toaster: FC<ToasterProps> = ({ ...rest }) => {
  return <Sonner {...rest} />;
};
