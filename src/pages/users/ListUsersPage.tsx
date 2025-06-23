import type { ColumnDef } from '@tanstack/react-table';

import { DataTable } from '@/components/ui/DataTable';
import { useFetchUsers } from '@/hooks/useFetchUsers';
import type { User } from '@/types/users';

export const ListUsersPage = () => {
  const { data, isLoading, isError } = useFetchUsers(1, 10);

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'email',
      header: 'Email',
    },
  ];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading users.</p>;
  }

  return (
    <div>
      <h1>Users List</h1>
      {data && <DataTable columns={columns} data={data.items} />}
    </div>
  );
};
