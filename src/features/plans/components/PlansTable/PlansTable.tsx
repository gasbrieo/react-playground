import type { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

import { DataTable } from '@/components/ui/DataTable';

import { useDataTable } from '@/hooks/useDataTable';
import type { Plan } from '../../types/plan';

interface PlansTableProps {
  data: Plan[];
}

export const PlansTable = ({ data }: PlansTableProps) => {
  const columns: ColumnDef<Plan>[] = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'price',
        header: 'Price',
      },
      {
        accessorKey: 'duration',
        header: 'Duration',
      },
    ],
    [],
  );

  const { table } = useDataTable({
    data,
    columns,
  });

  return <DataTable table={table} />;
};
