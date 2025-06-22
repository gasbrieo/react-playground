import type { FC } from 'react';

import { useListUsers } from '../api/use-list-users';
import { UsersTable } from '../components/users-table';

export const ListUsersPage: FC = () => {
  const listUsersQuery = useListUsers({ page: 1, pageSize: 10 });

  return (
    <div>
      <h1>Users List</h1>
      {listUsersQuery.isLoading && <p>Loading...</p>}
      {listUsersQuery.isError && <p>Error loading users.</p>}
      {listUsersQuery.data && <UsersTable users={listUsersQuery.data.items} />}
    </div>
  );
};
