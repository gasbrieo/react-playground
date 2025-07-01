import type { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "~/components/ui/Checkbox";
import { DataTable, DataTableColumnHeader, DataTableRowActions } from "~/components/ui/DataTable";

import { UserRole, UserStatus, type User } from "../types/users";

interface UsersTableProps {
  data: User[];
}

export const UsersTable = ({ data }: UsersTableProps) => {
  const columns: ColumnDef<User>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => <DataTableColumnHeader column={column} title="User" />,
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "role",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
      cell: ({ row }) => {
        const role = UserRole.find((role) => role.value === row.getValue("role"));

        if (!role) {
          return null;
        }

        return (
          <div className="flex w-[100px] items-center">
            {role.icon && <role.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
            <span>{role.label}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
      cell: ({ row }) => {
        const status = UserStatus.find((status) => status.value === row.getValue("status"));

        if (!status) {
          return null;
        }

        return (
          <div className="flex w-[100px] items-center">
            {status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
            <span>{status.label}</span>
          </div>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => <DataTableRowActions row={row} />,
    },
  ];

  return <DataTable columns={columns} data={data} />;
};
