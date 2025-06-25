import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { usersQueryOptions } from "../../api/getUsers";
import { UsersTable } from "../../components/UsersTable";
import { useRouter } from "@tanstack/react-router";
import { logout } from "~/features/auth";

export const UsersPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery(usersQueryOptions());

  const handleLogout = async () => {
    await logout();
    queryClient.resetQueries();
    router.invalidate();
  };

  return (
    <div>
      <UsersTable data={data} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
