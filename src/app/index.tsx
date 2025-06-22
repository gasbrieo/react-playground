import { type FC } from 'react';

import { AppProvider } from './provider';
import { AppRouter } from './router';

export const App: FC = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
