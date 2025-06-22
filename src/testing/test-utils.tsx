import { render, renderHook, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';

import { AppWrapper } from './test-wrapper';

const renderApp = (ui: ReactElement) => {
  return render(ui, { wrapper: AppWrapper });
};

export { screen, userEvent, render, renderApp, renderHook, waitFor };
