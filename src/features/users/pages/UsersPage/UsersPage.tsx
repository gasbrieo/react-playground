import { useSuspenseQuery } from "@tanstack/react-query";
import { usersQueryOptions } from "../../api/getUsers";
import { UsersTable } from "../../components/UsersTable";

export const UsersPage = () => {
  const { data } = useSuspenseQuery(usersQueryOptions());

  return (
    <div>
      <UsersTable data={data} />
    </div>
  );
};
