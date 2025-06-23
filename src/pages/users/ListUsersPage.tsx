import type { ColumnDef } from '@tanstack/react-table';

import { DataTable } from '@/components/ui/DataTable';
import { useFetchUsers } from '@/hooks/useFetchUsers';
import type { User } from '@/types/users';

export const ListUsersPage = () => {
  const { data, isLoading, isError } = useFetchUsers(1, 10);

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
    },
    {
      accessorKey: 'accountBalance',
      header: 'Account Balance',
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue('accountBalance'));
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount);

        return formatted;
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
    {
      accessorKey: 'roles',
      header: 'Roles',
    },
  ];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading users.</p>;
  }

  return <div className="container mx-auto py-10">{data && <DataTable columns={columns} data={data.items} />}</div>;
};
