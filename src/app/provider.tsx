import { type FC, type ReactNode, Suspense } from 'react';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return <Suspense>{children}</Suspense>;
};
