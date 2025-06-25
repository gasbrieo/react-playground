import { useSuspenseQuery } from "@tanstack/react-query";
import { UsersTable } from "./users.table";
import { usersQueryOptions } from "./users.api";

export const UsersPage = () => {
  const { data } = useSuspenseQuery(usersQueryOptions());

  return (
    <div>
      <UsersTable data={data} />
    </div>
  );
};
