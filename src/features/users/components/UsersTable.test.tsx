import { render, screen } from '@/testing/testUtils';

import { UsersTable } from './UsersTable';

describe('UsersTable', () => {
  it('renders a list of users with roles', () => {
    const users = [
      {
        userId: '1',
        email: 'john@example.com',
        roles: ['admin', 'editor'],
      },
      {
        userId: '2',
        email: 'jane@example.com',
        roles: ['user'],
      },
    ];

    render(<UsersTable users={users} />);

    expect(screen.getByText('john@example.com - Roles: admin, editor')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com - Roles: user')).toBeInTheDocument();
  });
});
