import type { FC } from 'react';

import { UsersTable } from '../components/UsersTable';
import { useListUsers } from '../hooks/useListUsers';

export const ListUsersPage: FC = () => {
  const listUsersQuery = useListUsers({ page: 1, pageSize: 10 });

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Users List</h1>
      {listUsersQuery.isLoading && <p>Loading...</p>}
      {listUsersQuery.isError && <p>Error loading users.</p>}
      {listUsersQuery.data && <UsersTable users={listUsersQuery.data.items} />}
    </div>
  );
};
