import { type FC } from 'react';

import { AppProvider } from './app-provider';
import { AppRouter } from './app-router';

export const App: FC = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
