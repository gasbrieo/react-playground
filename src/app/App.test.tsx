import { render, screen } from '@/testing/testUtils';

import { App } from './App';

describe('App', () => {
  it('shows index route', async () => {
    render(<App />);

    expect(await screen.findByText(/home/i)).toBeInTheDocument();
  });
});
