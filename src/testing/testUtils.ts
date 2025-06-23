import { render, renderHook, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';

import { TestWrapper } from './TestWrapper';

const renderApp = (ui: ReactElement) => {
  return render(ui, { wrapper: TestWrapper });
};

export { screen, userEvent, render, renderApp, renderHook, waitFor };
