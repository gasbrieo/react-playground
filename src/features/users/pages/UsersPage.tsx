import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";

import { logout } from "~/features/auth";

import { usersQueries } from "../api/queries";
import { UsersTable } from "../components/UsersTable";

export const UsersPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery(usersQueries.list());

  const handleLogout = async () => {
    await logout();
    queryClient.resetQueries();
    router.invalidate();
  };

  return (
    <div>
      <h1>UsersPage</h1>
      <UsersTable data={data} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
