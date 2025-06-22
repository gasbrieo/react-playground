import type { ReactNode } from '@tanstack/react-router';
import type { FC } from 'react';

import { AppProvider } from '@/app/app-provider';

interface AppWrapperProps {
  children: ReactNode;
}

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};
