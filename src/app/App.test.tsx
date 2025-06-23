import { render, screen, userEvent } from '@/testing/testUtils';

import { App } from './App';

describe('App', () => {
  it('shows index route', async () => {
    render(<App />);

    await screen.findByText(/Hello/i);
  });

  it('shows users route', async () => {
    render(<App />);

    const usersLink = await screen.findByRole('link', { name: /Users/i });
    await userEvent.click(usersLink);

    await screen.findByText(/Users List/i);
  });
});
