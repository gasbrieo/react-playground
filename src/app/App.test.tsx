import { render, screen, userEvent, waitFor } from '@/testing/testUtils';

import { App } from './App';

describe('App', () => {
  it('shows index route', async () => {
    render(<App />);

    expect(await screen.findByText(/hello/i)).toBeInTheDocument();
  });

  it('shows users route', async () => {
    render(<App />);

    const usersLink = await screen.findByRole('link', { name: /Users/i });
    await userEvent.click(usersLink);

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    expect(await screen.findByText(/account balance/i)).toBeInTheDocument();
  });
});
