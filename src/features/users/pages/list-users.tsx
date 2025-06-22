import type { FC } from 'react';

import { useListUsers } from '../api/list-users';

export const ListUsersPage: FC = () => {
  const listUsersQuery = useListUsers({ page: 1, pageSize: 10 });

  return (
    <div>
      <h1>Users List</h1>
      {listUsersQuery.isLoading && <p>Loading...</p>}
      {listUsersQuery.isError && <p>Error loading users.</p>}
      {listUsersQuery.data && (
        <ul>
          {listUsersQuery.data.items.map((user) => (
            <li key={user.userId}>
              {user.email} - Roles: {user.roles.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
