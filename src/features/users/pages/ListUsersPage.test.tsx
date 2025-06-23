import { http, HttpResponse } from 'msw';

import { server } from '@/testing/mocks/server';
import { renderApp, screen } from '@/testing/testUtils';

import { ListUsersPage } from './ListUsersPage';

describe('ListUsersPage', () => {
  it('shows loading indicator', async () => {
    server.use(
      http.get(
        '/api/v1/users',
        () => new Promise((resolve) => setTimeout(() => resolve(HttpResponse.json({ items: [], totalCount: 0 })), 100)),
      ),
    );

    renderApp(<ListUsersPage />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders user list on success', async () => {
    server.use(
      http.get('/api/v1/users', () =>
        HttpResponse.json({
          items: [
            {
              userId: '1',
              email: 'user@test.com',
              roles: ['admin'],
            },
          ],
          totalCount: 1,
          pageNumber: 1,
          totalPages: 1,
          hasNextPage: false,
          hasPreviousPage: false,
        }),
      ),
    );

    renderApp(<ListUsersPage />);

    expect(await screen.findByText(/user@test.com/)).toBeInTheDocument();
    expect(screen.getByText(/admin/i)).toBeInTheDocument();
  });

  it('shows error message on failure', async () => {
    server.use(http.get('/api/v1/users', () => HttpResponse.error()));

    renderApp(<ListUsersPage />);

    expect(await screen.findByText(/error loading users/i)).toBeInTheDocument();
  });
});
